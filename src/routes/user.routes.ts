import { Router } from "express";
import { createUserValidationRules } from "../validators/createUserValidator";
import { createUserController } from "../controllers/createUser";

const router = Router();

router.post("/", createUserValidationRules, createUserController);

export default router;
