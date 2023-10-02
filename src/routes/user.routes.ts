import { Router } from "express";
import { userValidationRules } from "../validators/createUserValidator";
import { createUser } from "../controllers/createUser";

const router = Router();

router.post("/", userValidationRules, createUser);

export default router;
