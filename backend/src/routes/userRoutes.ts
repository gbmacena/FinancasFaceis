import { Router } from "express";
import userController from "../controllers/userController";
import { validate } from "../middlewares/validate.middleware";
import authMiddleware from "../middlewares/auth.middlewares";
import { userUuidSchema, updateUserSchema, dashboardSchema } from "../schemas/userSchema";

const router = Router();

router.use(authMiddleware);

router.get("/:userId", validate(userUuidSchema), userController.getUser);
router.put("/:userId", validate(updateUserSchema), userController.updateUser);
router.get("/:userId/dashboard", validate(dashboardSchema), userController.getDashboard);

export default router;
