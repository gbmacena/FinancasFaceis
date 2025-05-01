import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { createError } from "../utils/customError";
import { CustomError } from "./../@types/index";

const prisma = new PrismaClient();

const register = async (name: string, email: string, password: string) => {
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw createError("User already registered", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, passwordHash: hashedPassword },
    });

    return user;
  } catch (error) {
    const customError = error as CustomError;
    if (customError.statusCode) {
      throw customError;
    }
    throw createError("Internal error while registering user", 500);
  }
};

const login = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw createError("User not found", 404);
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      throw createError("Incorrect password", 401);
    }

    return { message: "Login successful" };
  } catch (error) {
    const customError = error as CustomError;
    if (customError.statusCode) {
      throw customError;
    }
    throw createError("Internal error while logging in", 500);
  }
};

export default {
  register,
  login,
};
