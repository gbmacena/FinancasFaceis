import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const firstError = error.errors[0];
        const formattedError = {
          field: firstError.path.join("."),
          message: firstError.message,
        };
        res.status(400).json(formattedError);
      } else {
        res.status(500).json({ error: "Erro interno no servidor" });
      }
    }
  };
