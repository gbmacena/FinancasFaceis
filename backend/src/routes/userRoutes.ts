import { Router } from "express";
import userController from "../controllers/userController";
import { validate } from "../middlewares/validate.middleware";
import authMiddleware from "../middlewares/auth.middlewares";
import { userUuidSchema, updateUserSchema, dashboardSchema } from "../schemas/userSchema";

const router = Router();

router.use(authMiddleware);

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     summary: Obter informações do usuário
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       400:
 *        description: Dados inválidos
 *       500:
 *        description: Erro interno do servidor
 *       200:
 *         description: Dados do usuário retornados com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/:userId", validate(userUuidSchema), userController.getUser);

/**
 * @swagger
 * /users/{userId}:
 *   put:
 *     summary: Atualizar informações do usuário
 *     tags:
 *       - Usuários
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       400:
 *        description: Dados inválidos
 *       500:
 *       description: Erro interno do servidor
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.put("/:userId", validate(updateUserSchema), userController.updateUser);

/**
 * @swagger
 * /users/{userId}/dashboard:
 *   get:
 *     summary: Obter dados do dashboard do usuário
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: month
 *         in: query
 *         schema:
 *           type: string
 *           example: "2025-05"
 *       - name: category
 *         in: query
 *         schema:
 *           type: string
 *       - name: title
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       400:
 *        description: Dados inválidos
 *       500:
 *       description: Erro interno do servidor
 *       200:
 *         description: Dados do dashboard retornados com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/:userId/dashboard", validate(dashboardSchema), userController.getDashboard);

export default router;
