import { Router } from "express";
import authController from "../controllers/authController";
import { validate } from "../middlewares/validate.middleware";
import { registerSchema, loginSchema } from "../schemas/authSchema";

const router = Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registrar um novo usuário
 *     tags:
 *       - Autenticação
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
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       400:
 *         description: Campos inválidos
 *       500:
 *         description: Erro interno do servidor
 *       201:
 *         description: Usuário registrado com sucesso
 *       409:
 *         description: Usuário já registrado
 */
router.post("/register", validate(registerSchema), authController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Realizar login
 *     tags:
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       400:
 *         description: Campos inválidos
 *       500:
 *         description: Erro interno do servidor
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login", validate(loginSchema), authController.login);

export default router;
