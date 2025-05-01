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

      res.status(201).json({
        message: "Entry created successfully",
        entry,
      });
    } catch (error) {
      const customError = error as typeError;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error creating entry",
      });
    }
  },

  // listExpenses: async (req: Request, res: Response) => {
  //   try {
  //     const { userId } = req.params;
  //     const expenses = await userService.listExpenses(userId, req.query);
  //     res.json(expenses);
  //   } catch (error) {
  //     const customError = error as typeError;
  //     res.status(customError.statusCode || 500).json({
  //       message: customError.message || "Error fetching expenses",
  //     });
  //   }
  // },
};

export default userController;
