import { Router } from "express";
import { userValidationRules } from "../validators/createUserValidator";
import { createUserController } from "../controllers/createUser";

const router = Router();

router.post("/", userValidationRules, createUserController);

export default router;
