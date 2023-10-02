import { body } from "express-validator";

export const userValidationRules = [
  body("name").notEmpty().isLength({ min: 2 }),
  body("email").isEmail(),
  body("password").notEmpty(),
  body("picture").optional(),
];
