import { body } from "express-validator";

export const createTextValidator = [
  body("text").notEmpty().isArray(),
  body("author").notEmpty().isString(),
  body("title").notEmpty().isString(),
  body("image").notEmpty().isString(),
];