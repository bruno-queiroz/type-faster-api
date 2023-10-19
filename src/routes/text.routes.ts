import { Router } from "express";
import { createTextValidator } from "../validators/createTextValidator";
import { createTextController } from "../controllers/createText";
import { getTextController } from "../controllers/getText";

const router = Router();

router.post("/", createTextValidator, createTextController);
router.get("/", getTextController);

export default router;
