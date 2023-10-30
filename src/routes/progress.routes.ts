import { Router } from "express";
import { addProgressController } from "../controllers/addProgress";
import { addProgressValidator } from "../validators/addProgressValidator";
import { getProgressController } from "../controllers/getProgress";

const router = Router();

router.post("/", addProgressValidator, addProgressController);
router.get("/:email", getProgressController);

export default router;
