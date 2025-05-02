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

  getDashboard: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const { month, category, title } = req.query;

      const dashboardData = await userService.getDashboard(userId, {
        month: month as string,
        category: category as string,
        title: title as string,
      });

      res.status(200).json(dashboardData);
    } catch (error) {
      const customError = error as typeError;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error fetching dashboard data",
      });
    }
  },
};

export default userController;
