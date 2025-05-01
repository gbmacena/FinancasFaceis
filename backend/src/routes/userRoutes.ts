import { Router } from "express";
import userController from "../controllers/userController";
import { validate } from "../middlewares/validate.middleware";
import { userUuidSchema, updateUserSchema, createEntrySchema, createExpenseSchema } from "../schemas/userSchema";

const router = Router();

router.get("/:userId", validate(userUuidSchema), userController.getUser);
router.put("/:userId", validate(updateUserSchema), userController.updateUser);
router.post("/:userId/entries", validate(createEntrySchema), userController.createEntry);
router.post("/:userId/expenses", validate(createExpenseSchema), userController.createExpense);

//  router.get("/:userId/expenses", validate(userUuidSchema), userController.listExpenses);
//  router.put("/:userId/expenses/:expenseId", userController.updateExpense);
//  router.delete("/:userId/expenses/:expenseId", userController.deleteExpense);

// router.post("/:userId/expenses/installments", userController.createInstallment);
// router.post("/:userId/recurring-expenses", userController.createRecurringExpense);

// router.get("/:userId/dashboard", userController.getDashboard);
// router.get("/:userId/dashboard/comparison", userController.getDashboardComparison);

export default router;
