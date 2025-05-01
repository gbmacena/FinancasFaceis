import { Router } from "express";
import userController from "../controllers/userController";
import { validate } from "../middlewares/validate.middleware";
import {
  userUuidSchema,
  updateUserSchema,
  createEntrySchema,
  createExpenseSchema,
  updateExpenseSchema,
  dashboardSchema,
} from "../schemas/userSchema";

const router = Router();

router.get("/:userId", validate(userUuidSchema), userController.getUser);
router.put("/:userId", validate(updateUserSchema), userController.updateUser);
router.post("/:userId/entries", validate(createEntrySchema), userController.createEntry);
router.post("/:userId/expenses", validate(createExpenseSchema), userController.createExpense);
router.put("/expenses/:expenseId", validate(updateExpenseSchema), userController.updateExpense);
router.delete("/expenses/:expenseId", userController.deleteExpense);
router.get("/:userId/dashboard", validate(dashboardSchema), userController.getDashboard);

// router.post("/:userId/expenses/installments", userController.createInstallment);
// router.post("/:userId/recurring-expenses", userController.createRecurringExpense);

// router.get("/:userId/dashboard/comparison", userController.getDashboardComparison);

export default router;
