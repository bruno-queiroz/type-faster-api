import { query } from "express-validator";

export const getTextValidator = [
  query("mode").notEmpty().isString().withMessage("Invalid query parameter."),
];
