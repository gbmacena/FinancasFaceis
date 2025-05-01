import { Router } from "express";
import transactionController from "../controllers/transactionController";
import { validate } from "../middlewares/validate.middleware";
import authMiddleware from "../middlewares/auth.middlewares";
import { createEntrySchema, createExpenseSchema, updateExpenseSchema } from "../schemas/transactionShema";

const router = Router();

router.use(authMiddleware);

router.post("/:userId/entries", validate(createEntrySchema), transactionController.createEntry);
router.post("/:userId/expenses", validate(createExpenseSchema), transactionController.createExpense);
router.put("/expenses/:expenseId", validate(updateExpenseSchema), transactionController.updateExpense);
router.delete("/expenses/:expenseId", transactionController.deleteExpense);

export default router;
