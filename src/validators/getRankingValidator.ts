import { param } from "express-validator";

export const getRankingValidator = [param("textId").exists()];
