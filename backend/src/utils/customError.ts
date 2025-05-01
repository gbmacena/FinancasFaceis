import { typeError } from "./../@types/index";

export const createError = (message: string, statusCode: number): typeError => {
  const error = new Error(message) as typeError;
  error.statusCode = statusCode;
  return error;
};
