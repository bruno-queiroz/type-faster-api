import { Router } from "express";
import { addProgressController } from "../controllers/addProgress";
import { addProgressValidator } from "../validators/addProgressValidator";

const router = Router();

router.post("/", addProgressValidator, addProgressController);

export default router;
