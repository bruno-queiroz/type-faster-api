import { Router } from "express";
import { getRankingController } from "../controllers/getRanking";
import { getRankingValidator } from "../validators/getRankingValidator";

const router = Router();

router.get("/:textId", getRankingValidator, getRankingController);

export default router;
