import { Router } from "express";
import { addProgressController } from "../controllers/addProgress";
import { addProgressValidator } from "../validators/addProgressValidator";
import { getProgressController } from "../controllers/getProgress";
import { getProgressValidator } from "../validators/getProgressValidation";

const router = Router();

router.post("/", addProgressValidator, addProgressController);
router.get("/:email", getProgressValidator, getProgressController);

export default router;
