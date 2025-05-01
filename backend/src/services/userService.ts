import { PrismaClient } from "@prisma/client";
import { createError } from "../utils/customError";
import { typeError, UpdateUserData } from "../@types/index";
import { userDto } from "../dtos/userDto";
import { CategoryType } from "@prisma/client";

const prisma = new PrismaClient();

const userService = {
  getUser: async (userId: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: { uuid: userId },
        include: {
          expenses: true,
          income: true,
        },
      });
      if (!user) {
        throw createError("User not found", 404);
      }
      return userDto(user);
    } catch (error) {
      const customError = error as typeError;
      if (customError.statusCode) {
        throw customError;
      }
      throw createError("Internal error while fetching user data", 500);
    }
  },

  updateUser: async (userId: string, data: UpdateUserData) => {
    try {
      const user = await prisma.user.findUnique({ where: { uuid: userId } });

      if (!user) {
        throw createError("User not found", 404);
      }

      const updatedUser = await prisma.user.update({
        where: { uuid: userId },
        data,
      });

      return userDto(updatedUser);
    } catch (error) {
      const customError = error as typeError;
      if (customError.statusCode) {
        throw customError;
      }
      throw createError("Internal error while updating user data", 500);
    }
  },
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

    // Caso seja uma despesa recorrente
    if (expenseData.isRecurring) {
      if (!expenseData.endDate) {
        throw createError("End date is required for recurring expenses", 400);
      }

      const startDate = new Date(expenseData.date);
      const endDate = new Date(expenseData.endDate);

      if (startDate > endDate) {
        throw createError("Start date cannot be after end date", 400);
      }

      // Criar o registro principal na tabela RecurringExpense
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

      // Gerar as despesas associadas na tabela Expense
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
          recurringExpenseId: recurringExpense.id, // Associar à despesa recorrente
        });

        currentMonth += 1;
        if (currentMonth > 11) {
          currentMonth = 0;
          currentYear += 1;
        }
      }

      // Criar as despesas associadas na tabela Expense
      await prisma.expense.createMany({
        data: recurringExpenses,
      });

      // Retorna para evitar criar uma despesa adicional
      return;
    }

    // Caso seja uma despesa parcelada
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

    // Caso seja uma despesa normal
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
  //   expenseData: {
  //     title: string;
  //     value: number;
  //     date: string;
  //     categoryId?: number;
  //     installments: number;
  //   }
  // ) => {
  //   const user = await prisma.user.findUnique({ where: { uuid: userId } });
  //   if (!user) throw createError("User not found", 404);

  //   if (expenseData.categoryId) {
  //     const cat = await prisma.category.findUnique({ where: { id: expenseData.categoryId } });
  //     if (!cat) throw createError("Category not exists", 404);
  //   }

  //   const total = expenseData.installments;
  //   const installmentValue = expenseData.value / total;
  //   const installments: Array<{
  //     title: string;
  //     value: number;
  //     date: Date;
  //     userId: number;
  //     categoryId: number | null;
  //   }> = [];

  //   const initial = new Date(expenseData.date);
  //   const startDay = initial.getUTCDate();
  //   const startMonth = initial.getUTCMonth();
  //   const startYear = initial.getUTCFullYear();

  //   for (let i = 0; i < total; i++) {
  //     const linearMonth = startMonth + i;
  //     const year = startYear + Math.floor(linearMonth / 12);
  //     const month = linearMonth % 12;

  //     const lastDayOfMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  //     const day = Math.min(startDay, lastDayOfMonth);

  //     const date = new Date(Date.UTC(year, month, day));

  //     installments.push({
  //       title: `${expenseData.title} (Parcela ${i + 1}/${total})`,
  //       value: installmentValue,
  //       date,
  //       userId: user.id,
  //       categoryId: expenseData.categoryId ?? null,
  //     });
  //   }

  //   // Criar as despesas individualmente para obter os IDs
  //   const createdExpenses = [];
  //   for (const installment of installments) {
  //     const expense = await prisma.expense.create({ data: installment });
  //     createdExpenses.push(expense);
  //   }

  //   // Criar os registros na tabela Installment
  //   const installmentRecords = createdExpenses.map((expense, index) => ({
  //     expenseId: expense.id, // Associar ao ID da despesa criada
  //     value: installments[index].value,
  //     date: installments[index].date,
  //   }));

  //   await prisma.installment.createMany({ data: installmentRecords });
  // },
  // createRecurringExpense: async (
  //   userId: string,
  //   expenseData: { title: string; value: number; date: string; categoryId?: number; endDate: string }
  // ) => {
  //   console.log("Starting createRecurringExpense...");
  //   console.log("Received data:", expenseData);

  //   const user = await prisma.user.findUnique({ where: { uuid: userId } });

  //   if (!user) {
  //     console.error("User not found");
  //     throw createError("User not found", 404);
  //   }

  //   console.log("User found:", user);

  //   if (expenseData.categoryId) {
  //     const categoryExists = await prisma.category.findUnique({
  //       where: { id: expenseData.categoryId },
  //     });

  //     if (!categoryExists) {
  //       console.error("Category not exists");
  //       throw createError("Category not exists", 404);
  //     }

  //     console.log("Category found:", categoryExists);
  //   }

  //   const startDate = new Date(expenseData.date);
  //   const endDate = new Date(expenseData.endDate);

  //   console.log("Start Date:", startDate);
  //   console.log("End Date:", endDate);

  //   if (startDate > endDate) {
  //     console.error("Start date is after end date");
  //     throw createError("Start date cannot be after end date", 400);
  //   }

  //   // Criar o registro principal na tabela RecurringExpense
  //   const recurringExpense = await prisma.recurringExpense.create({
  //     data: {
  //       userId: user.id,
  //       title: expenseData.title,
  //       value: expenseData.value,
  //       categoryId: expenseData.categoryId || null,
  //       nextDueDate: startDate,
  //       endDate: endDate,
  //       frequency: "monthly", // Ajuste conforme necessário
  //     },
  //   });

  //   console.log("RecurringExpense created:", recurringExpense);

  //   const recurringExpenses = [];
  //   const startDay = startDate.getUTCDate();
  //   const startMonth = startDate.getUTCMonth();
  //   const startYear = startDate.getUTCFullYear();

  //   let currentMonth = startMonth;
  //   let currentYear = startYear;

  //   while (true) {
  //     const lastDayOfMonth = new Date(Date.UTC(currentYear, currentMonth + 1, 0)).getUTCDate();
  //     const day = Math.min(startDay, lastDayOfMonth);

  //     const currentDate = new Date(Date.UTC(currentYear, currentMonth, day));

  //     if (currentDate > endDate) break;

  //     console.log("Creating recurring expense for date:", currentDate);

  //     recurringExpenses.push({
  //       title: expenseData.title,
  //       value: expenseData.value,
  //       date: currentDate,
  //       userId: user.id,
  //       categoryId: expenseData.categoryId || null,
  //       recurringExpenseId: recurringExpense.id, // Associar à despesa recorrente
  //     });

  //     currentMonth += 1;
  //     if (currentMonth > 11) {
  //       currentMonth = 0;
  //       currentYear += 1;
  //     }
  //   }

  //   console.log("Final Recurring Expenses Array:", recurringExpenses);

  //   // Criar as despesas associadas na tabela Expense
  //   await prisma.expense.createMany({
  //     data: recurringExpenses,
  //   });

  //   console.log("Recurring expenses successfully created!");
  // },
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
  getDashboard: async (userUuid: string, filters: { month?: string; category?: string; title?: string }) => {
    try {
      const user = await prisma.user.findUnique({
        where: { uuid: userUuid },
      });

      if (!user) {
        throw createError("User not found", 404);
      }

      const { month, category, title } = filters;

      const currentMonth = new Date().toISOString().slice(0, 7);
      const selectedMonth = month || currentMonth;

      const startDate = new Date(`${selectedMonth}-01`);
      const endDate = new Date(new Date(`${selectedMonth}-01`).setMonth(startDate.getMonth() + 1));

      const [income, expenses] = await Promise.all([
        prisma.entries.aggregate({
          where: {
            userId: user.id,
            date: {
              gte: startDate,
              lt: endDate,
            },
          },
          _sum: { value: true },
        }),
        prisma.expense.aggregate({
          where: {
            userId: user.id,
            date: {
              gte: startDate,
              lt: endDate,
            },
          },
          _sum: { value: true },
        }),
      ]);

      const expenseList = await prisma.expense.findMany({
        where: {
          userId: user.id,
          date: {
            gte: startDate,
            lt: endDate,
          },
          category: category
            ? {
                name: category as CategoryType,
              }
            : undefined,
          title: title ? { contains: title, mode: "insensitive" } : undefined,
        },
        select: {
          title: true,
          value: true,
          category: {
            select: {
              name: true,
            },
          },
          date: true,
        },
      });

      return {
        user: {
          name: user.name,
          balance: (income._sum.value || 0) - (expenses._sum.value || 0),
          income: income._sum.value || 0,
          expenses: expenses._sum.value || 0,
        },
        expenses: expenseList,
      };
    } catch (error) {
      const customError = error as typeError;
      if (customError.statusCode) {
        throw customError;
      }
      throw createError("Internal error while fetching dashboard data", 500);
    }
  },
};

export default userService;
