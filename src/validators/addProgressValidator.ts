import { body } from "express-validator";

export const addProgressValidator = [
  body("email").notEmpty().isEmail(),
  body("textId").notEmpty().isString(),
  body("cpm").notEmpty().isNumeric(),
  body("typos").notEmpty().isNumeric(),
];
