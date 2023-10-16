import { body } from "express-validator";

export const createUserValidationRules = [
  body("name").notEmpty().isLength({ min: 2 }),
  body("email").isEmail(),
  body("password").optional().isString(),
  body("image").optional(),
];
