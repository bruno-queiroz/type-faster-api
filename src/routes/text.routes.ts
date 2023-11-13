import { Router } from "express";
import { createTextValidator } from "../validators/createTextValidator";
import { createTextController } from "../controllers/createText";
import { getTextController } from "../controllers/getText";
import { getTextValidator } from "../validators/getTextValidator";
import { createWordValidator } from "../validators/createWordValidator";
import { createWordController } from "../controllers/createWord";

const router = Router();

router.post("/", createTextValidator, createTextController);
router.post("/word", createWordValidator, createWordController);
router.get("/", getTextValidator, getTextController);

export default router;
