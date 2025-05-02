import { Request, Response } from "express";
import transactionService from "../services/transactionService";
import { typeError } from "../@types/index";

const transactionController = {
  createEntry: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const { value, date } = req.body;

      const entry = await transactionService.createEntry(userId, { value, date });

      res.status(201).json(entry);
    } catch (error) {
      const customError = error as typeError;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error creating entry",
      });
    }
  },
  createExpense: async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const { title, value, date, categoryId, installments, isRecurring, endDate } = req.body;

      console.log(date);
      await transactionService.createExpense(userId, {
        title,
        value,
        date,
        categoryId,
        installments,
        isRecurring,
        endDate,
      });

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

      await transactionService.updateExpense(expenseId, updateData);

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

      await transactionService.deleteExpense(expenseId);

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

export default transactionController;
