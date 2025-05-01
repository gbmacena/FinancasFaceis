import { PrismaClient } from "@prisma/client";
import { createError } from "../utils/customError";
import { typeError } from "../@types/index";

const prisma = new PrismaClient();

const transactionService = {
  createEntry: async (userId: string, data: { value: number; date: string }) => {
    try {
      const user = await prisma.user.findUnique({ where: { uuid: userId } });

      if (!user) {
        throw createError("User not found", 404);
      }

      await prisma.entries.create({
        data: {
          value: data.value,
          date: new Date(data.date),
          userId: user.id,
        },
      });

      return { message: "Entry created successfully" };
    } catch (error) {
      const customError = error as typeError;
      if (customError.statusCode) {
        throw customError;
      }
      throw createError("Internal error while creating entry", 500);
    }
  },
  createExpense: async (
    userId: string,
    expenseData: {
      title: string;
      value: number;
      date: string;
      categoryId?: number;
      installments?: number;
      isRecurring?: boolean;
      endDate?: string;
    }
  ) => {
    const user = await prisma.user.findUnique({ where: { uuid: userId } });
    if (!user) throw createError("User not found", 404);

    if (expenseData.categoryId) {
      const categoryExists = await prisma.category.findUnique({ where: { id: expenseData.categoryId } });
      if (!categoryExists) throw createError("Category not exists", 404);
    }

    if (expenseData.isRecurring) {
      if (!expenseData.endDate) {
        throw createError("End date is required for recurring expenses", 400);
      }

      const startDate = new Date(expenseData.date);
      const endDate = new Date(expenseData.endDate);

      if (startDate > endDate) {
        throw createError("Start date cannot be after end date", 400);
      }

      const recurringExpense = await prisma.recurringExpense.create({
        data: {
          userId: user.id,
          title: expenseData.title,
          value: expenseData.value,
          categoryId: expenseData.categoryId || null,
          nextDueDate: startDate,
          endDate: endDate,
          frequency: "monthly",
        },
      });

      const recurringExpenses = [];
      const startDay = startDate.getUTCDate();
      const startMonth = startDate.getUTCMonth();
      const startYear = startDate.getUTCFullYear();

      let currentMonth = startMonth;
      let currentYear = startYear;

      while (true) {
        const lastDayOfMonth = new Date(Date.UTC(currentYear, currentMonth + 1, 0)).getUTCDate();
        const day = Math.min(startDay, lastDayOfMonth);

        const currentDate = new Date(Date.UTC(currentYear, currentMonth, day));

        if (currentDate > endDate) break;

        recurringExpenses.push({
          title: expenseData.title,
          value: expenseData.value,
          date: currentDate,
          userId: user.id,
          categoryId: expenseData.categoryId || null,
          recurringExpenseId: recurringExpense.id,
        });

        currentMonth += 1;
        if (currentMonth > 11) {
          currentMonth = 0;
          currentYear += 1;
        }
      }

      await prisma.expense.createMany({
        data: recurringExpenses,
      });

      return;
    }

    if (expenseData.installments && expenseData.installments > 1) {
      const total = expenseData.installments;
      const installmentValue = expenseData.value / total;
      const installments: Array<{
        title: string;
        value: number;
        date: Date;
        userId: number;
        categoryId: number | null;
      }> = [];

      const initial = new Date(expenseData.date);
      const startDay = initial.getUTCDate();
      const startMonth = initial.getUTCMonth();
      const startYear = initial.getUTCFullYear();

      for (let i = 0; i < total; i++) {
        const linearMonth = startMonth + i;
        const year = startYear + Math.floor(linearMonth / 12);
        const month = linearMonth % 12;

        const lastDayOfMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
        const day = Math.min(startDay, lastDayOfMonth);

        const date = new Date(Date.UTC(year, month, day));

        installments.push({
          title: `${expenseData.title} (Parcela ${i + 1}/${total})`,
          value: installmentValue,
          date,
          userId: user.id,
          categoryId: expenseData.categoryId ?? null,
        });
      }

      const createdExpenses = [];
      for (const installment of installments) {
        const expense = await prisma.expense.create({ data: installment });
        createdExpenses.push(expense);
      }

      const installmentRecords = createdExpenses.map((expense, index) => ({
        expenseId: expense.id,
        value: installments[index].value,
        date: installments[index].date,
        title: installments[index].title,
      }));

      await prisma.installment.createMany({ data: installmentRecords });

      return;
    }

    await prisma.expense.create({
      data: {
        title: expenseData.title,
        value: expenseData.value,
        date: new Date(expenseData.date),
        userId: user.id,
        categoryId: expenseData.categoryId || null,
      },
    });
  },
  updateExpense: async (
    expenseUuid: string,
    updateData: { title?: string; value?: number; date?: string; categoryId?: number }
  ) => {
    try {
      const expense = await prisma.expense.findUnique({
        where: { uuid: expenseUuid },
      });

      if (!expense) {
        throw createError("Expense not found", 404);
      }

      if (updateData.categoryId) {
        const categoryExists = await prisma.category.findUnique({
          where: { id: updateData.categoryId },
        });

        if (!categoryExists) {
          throw createError("Category not exists", 404);
        }
      }

      const updatedExpense = await prisma.expense.update({
        where: { uuid: expenseUuid },
        data: {
          ...updateData,
          date: updateData.date ? new Date(updateData.date) : undefined,
        },
      });

      return updatedExpense;
    } catch (error) {
      const customError = error as typeError;
      if (customError.statusCode) {
        throw customError;
      }
      throw createError("Internal error while updating expense", 500);
    }
  },
  deleteExpense: async (expenseUuid: string) => {
    try {
      const expense = await prisma.expense.findUnique({
        where: { uuid: expenseUuid },
      });

      if (!expense) {
        throw createError("Expense not found", 404);
      }

      await prisma.installment.deleteMany({
        where: { expenseId: expense.id },
      });

      await prisma.expense.delete({
        where: { uuid: expenseUuid },
      });

      return { message: "Expense deleted successfully" };
    } catch (error) {
      const customError = error as typeError;
      if (customError.statusCode) {
        throw customError;
      }
      throw createError("Internal error while deleting expense", 500);
    }
  },
};

export default transactionService;
