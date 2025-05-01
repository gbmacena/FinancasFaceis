import { PrismaClient } from "@prisma/client";
import { createError } from "../utils/customError";
import { typeError, UpdateUserData } from "../@types/index";
import { userDto } from "../dtos/userDto";

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
};

// createEntry: async (userId: string, data: any) => {
//   try {
//     const user = await prisma.user.findUnique({ where: { uuid: userId } });
//     if (!user) {
//       throw createError("User not found", 404);
//     }

//     const entry = await prisma.entries.create({
//       data: {
//         ...data,
//         userId: user.id, // Relaciona o ID interno do usuário
//       },
//     });
//     return entry;
//   } catch (error) {
//     const customError = error as typeError;
//     if (customError.statusCode) {
//       throw customError;
//     }
//     throw createError("Internal error while creating entry", 500);
//   }
// },

// listExpenses: async (userId: string, query: any) => {
//   try {
//     const filters: any = { userId };

//     if (query.month) {
//       filters.createdAt = {
//         gte: new Date(`${query.month}-01`),
//         lt: new Date(`${query.month}-31`),
//       };
//     }

//     if (query.title) {
//       filters.title = { contains: query.title, mode: "insensitive" };
//     }

//     if (query.category) {
//       filters.category = query.category;
//     }

//     const expenses = await prisma.expense.findMany({
//       where: filters,
//       skip: query.skip ? parseInt(query.skip) : undefined,
//       take: query.take ? parseInt(query.take) : undefined,
//     });

//     return expenses;
//   } catch (error) {
//     const customError = error as typeError;
//     if (customError.statusCode) {
//       throw customError;
//     }
//     throw createError("Internal error while listing expenses", 500);
//   }
// },

export default userService;
