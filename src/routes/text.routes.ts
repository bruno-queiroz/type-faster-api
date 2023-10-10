import { Router } from "express";
import { createTextValidator } from "../validators/createTextValidator";
import { createTextController } from "../controllers/createText";

const router = Router();

router.post("/", createTextValidator, createTextController);

export default router;
