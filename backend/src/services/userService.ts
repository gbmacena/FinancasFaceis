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
    expenseData: { title: string; value: number; date: string; categoryId?: number }
  ) => {
    try {
      const user = await prisma.user.findUnique({ where: { uuid: userId } });

      if (!user) {
        throw createError("User not found", 404);
      }

      const categoriaExists = await prisma.category.findUnique({
        where: { id: expenseData.categoryId || 0 },
      });

      if (expenseData.categoryId && !categoriaExists) {
        throw createError("Category not exists", 404);
      }

      const expense = await prisma.expense.create({
        data: {
          title: expenseData.title,
          value: expenseData.value,
          date: new Date(expenseData.date),
          userId: user.id,
          categoryId: expenseData.categoryId || null,
        },
      });

      return expense;
    } catch (error) {
      const customError = error as typeError;
      if (customError.statusCode) {
        throw customError;
      }
      throw createError("Internal error while creating expense", 500);
    }
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
