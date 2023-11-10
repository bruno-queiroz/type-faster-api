import { Router } from "express";
import { createTextValidator } from "../validators/createTextValidator";
import { createTextController } from "../controllers/createText";
import { getTextController } from "../controllers/getText";
import { getTextValidator } from "../validators/getTextValidator";

const router = Router();

router.post("/", createTextValidator, createTextController);
router.get("/", getTextValidator, getTextController);

export default router;
