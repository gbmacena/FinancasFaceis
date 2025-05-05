import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { createError } from "../utils/customError";
import { typeError, LoginParams, LoginResponse, RegisterParams, RegisterResponse } from "../types";
import { generateToken } from "../utils/jwt.utils";

const prisma = new PrismaClient();

const authService = {
  register: async ({ name, email, password }: RegisterParams): Promise<RegisterResponse> => {
    try {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        throw createError("User already registered", 409);
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      await prisma.user.create({
        data: { name, email, passwordHash: hashedPassword },
      });

      return { message: "User registered successfully" };
    } catch (error) {
      const customError = error as typeError;
      if (customError.statusCode) throw customError;
      throw createError("Internal error while registering user", 500);
    }
  },

  login: async ({ email, password }: LoginParams): Promise<LoginResponse> => {
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) throw createError("User not found", 404);

      const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
      if (!isPasswordValid) throw createError("Incorrect password", 401);

      const accessToken = generateToken({ id: user.id, email: user.email });

      return {
        message: "Login successful",
        user: {
          uuid: user.uuid,
          name: user.name,
        },
        accessToken,
      };
    } catch (error) {
      const customError = error as typeError;
      if (customError.statusCode) throw customError;
      throw createError("Internal error while logging in", 500);
    }
  },
};

export default authService;
