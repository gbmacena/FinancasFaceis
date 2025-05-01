import { Request, Response } from "express";
import userService from "../services/userService";
import { typeError } from "../@types/index";

const userController = {
  getUser: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const user = await userService.getUser(userId);
      res.json(user);
    } catch (error) {
      const customError = error as typeError;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error fetching user data",
      });
    }
  },

  updateUser: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;

      const { name, email } = req.body;
      const updateData: { name?: string; email?: string } = {};
      if (name) updateData.name = name;
      if (email) updateData.email = email;

      const updatedUser = await userService.updateUser(userId, updateData);

      res.status(200).json({
        message: "User updated successfully",
        user: updatedUser,
      });
    } catch (error) {
      const customError = error as typeError;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error updating user data",
      });
    }
  },

  createEntry: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const { value, date } = req.body;

      const entry = await userService.createEntry(userId, { value, date });

      res.status(201).json(entry);
    } catch (error) {
      const customError = error as typeError;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error creating entry",
      });
    }
  },
  createExpense: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const { title, value, date, categoryId } = req.body;

      await userService.createExpense(userId, { title, value, date, categoryId });

      res.status(201).json({
        message: "Expense created successfully",
      });
    } catch (error) {
      const customError = error as typeError;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error creating expense",
      });
    }
  },
  updateExpense: async (req: Request, res: Response) => {
    try {
      const { expenseId } = req.params;
      const { title, value, date, categoryId } = req.body;

      const updateData: { title?: string; value?: number; date?: string; categoryId?: number } = {};
      if (title) updateData.title = title;
      if (value) updateData.value = value;
      if (date) updateData.date = date;
      if (categoryId) updateData.categoryId = categoryId;

      await userService.updateExpense(expenseId, updateData);

      res.status(200).json({
        message: "Expense updated successfully",
      });
    } catch (error) {
      const customError = error as typeError;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error updating expense",
      });
    }
  },
  deleteExpense: async (req: Request, res: Response) => {
    try {
      const { expenseId } = req.params;

      await userService.deleteExpense(expenseId);

      res.status(200).json({
        message: "Expense deleted successfully",
      });
    } catch (error) {
      const customError = error as typeError;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error deleting expense",
      });
    }
  },
};

export default userController;
