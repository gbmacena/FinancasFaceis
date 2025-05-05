import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    name: z.string().min(2, "The name must have at least 2 characters"),
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(6, "The password must have at least 6 characters")
      .regex(/[A-Z]/, "The password must contain at least one uppercase letter")
      .regex(/[\W_]/, "The password must contain at least one special character"),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(6, "The password must have at least 6 characters")
      .regex(/[A-Z]/, "The password must contain at least one uppercase letter")
      .regex(/[\W_]/, "The password must contain at least one special character"),
  }),
});

export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string().nonempty("The refresh token is required"),
  }),
});
