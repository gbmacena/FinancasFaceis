import jwt from "jsonwebtoken";
import { typeError } from "../@types/index";
import { createError } from "./customError";

const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;
const JWT_EXPIRATION = "1h";
const REFRESH_EXPIRATION = "7d";

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

export const generateRefreshToken = (payload: object): string => {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRATION });
};

export const verifyToken = (token: string, type: "access" | "refresh"): object => {
  try {
    const secret = type === "access" ? JWT_SECRET : REFRESH_SECRET;
    return jwt.verify(token, secret);
  } catch (error) {
    const customError = error as typeError;
    if (customError.statusCode) {
      throw customError;
    }
    throw createError("Internal error while registering user", 500);
  }
};
