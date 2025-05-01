import { Request, Response } from "express";
import authService from "../services/authService";

interface CustomError extends Error {
  statusCode?: number;
}

const authController = {
  register: async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
      const user = await authService.register(name, email, password);
      res.status(201).json(user);
    } catch (error) {
      const customError = error as CustomError;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Internal server error",
      });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      res.json(result);
    } catch (error) {
      const customError = error as CustomError;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Internal server error",
      });
    }
  },
};

export default authController;
