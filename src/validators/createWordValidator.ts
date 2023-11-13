import { body } from "express-validator";

export const createWordValidator = [body("word").notEmpty().isString()];
