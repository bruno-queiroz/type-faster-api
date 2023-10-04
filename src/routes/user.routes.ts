import { Router } from "express";
import { createUserValidationRules } from "../validators/createUserValidator";
import { createUserController } from "../controllers/createUser";
import { signInUserController } from "../controllers/signInUser";
import { signInUserValidationRules } from "../validators/signInUserValidator";

const router = Router();

router.post("/sign-up", createUserValidationRules, createUserController);
router.post("/sign-in", signInUserValidationRules, signInUserController);

export default router;
