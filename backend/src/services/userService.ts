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

      const startDate = new Date(`${selectedMonth}-01T00:00:00.000Z`);
      const endDate = new Date(new Date(`${selectedMonth}-01T00:00:00.000Z`).setMonth(startDate.getMonth() + 1));

      const adjustedStartDate = new Date(startDate.toISOString());
      const adjustedEndDate = new Date(endDate.toISOString());

      const [income, expenses] = await Promise.all([
        prisma.entries.aggregate({
          where: {
            userId: user.id,
            date: {
              gte: adjustedStartDate,
              lt: adjustedEndDate,
            },
          },
          _sum: { value: true },
        }),
        prisma.expense.aggregate({
          where: {
            userId: user.id,
            date: {
              gte: adjustedStartDate,
              lt: adjustedEndDate,
            },
          },
          _sum: { value: true },
        }),
      ]);

      const expenseList = await prisma.expense.findMany({
        where: {
          userId: user.id,
          date: {
            gte: adjustedStartDate,
            lt: adjustedEndDate,
          },
          category: category
            ? {
                name: category as CategoryType,
              }
            : undefined,
          title: title ? { contains: title, mode: "insensitive" } : undefined,
        },
        select: {
          uuid: true,
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

      const balance = (income._sum.value || 0) - (expenses._sum.value || 0);

      return {
        user: {
          name: user.name,
          balance,
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
