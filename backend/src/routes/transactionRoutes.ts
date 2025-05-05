import { Router } from "express";
import transactionController from "../controllers/transactionController";
import { validate } from "../middlewares/validate.middleware";
import authMiddleware from "../middlewares/auth.middlewares";
import { createEntrySchema, createExpenseSchema, updateExpenseSchema } from "../schemas/transactionShema";

const router = Router();

router.use(authMiddleware);

/**
 * @swagger
 * /transactions/{userId}/entries:
 *   post:
 *     summary: Criar uma nova entrada
 *     tags:
 *       - Transações
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               value:
 *                 type: number
 *               date:
 *                 type: string
 *                 format: date
 *             required:
 *               - value
 *               - date
 *     responses:
 *       400:
 *        description: Dados inválidos
 *       500:
 *       description: Erro interno do servidor
 *       201:
 *         description: Entrada criada com sucesso
 */
router.post("/:userId/entries", validate(createEntrySchema), transactionController.createEntry);

/**
 * @swagger
 * /transactions/{userId}/expenses:
 *   post:
 *     summary: Criar uma nova despesa
 *     tags:
 *       - Transações
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               value:
 *                 type: number
 *               date:
 *                 type: string
 *                 format: date
 *               categoryId:
 *                 type: integer
 *               installments:
 *                 type: integer
 *               isRecurring:
 *                 type: boolean
 *               endDate:
 *                 type: string
 *                 format: date
 *             required:
 *               - title
 *               - value
 *               - date
 *     responses:
 *       400:
 *        description: Dados inválidos
 *       500:
 *       description: Erro interno do servidor
 *       201:
 *         description: Despesa criada com sucesso
 */
router.post("/:userId/expenses", validate(createExpenseSchema), transactionController.createExpense);

/**
 * @swagger
 * /transactions/expenses/{expenseId}:
 *   put:
 *     summary: Atualizar uma despesa
 *     tags:
 *       - Transações
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: expenseId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               value:
 *                 type: number
 *               date:
 *                 type: string
 *                 format: date
 *               categoryId:
 *                 type: integer
 *     responses:
 *       400:
 *        description: Dados inválidos
 *       500:
 *       description: Erro interno do servidor
 *       200:
 *         description: Despesa atualizada com sucesso
 */
router.put("/expenses/:expenseId", validate(updateExpenseSchema), transactionController.updateExpense);

/**
 * @swagger
 * /transactions/expenses/{expenseId}:
 *   delete:
 *     summary: Deletar uma despesa
 *     tags:
 *       - Transações
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: expenseId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       400:
 *        description: Dados inválidos
 *       500:
 *       description: Erro interno do servidor
 *       200:
 *         description: Despesa deletada com sucesso
 */
router.delete("/expenses/:expenseId", transactionController.deleteExpense);

export default router;
