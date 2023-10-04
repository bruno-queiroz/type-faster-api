import { body } from "express-validator";

export const signInUserValidationRules = [
  body("email").isEmail(),
  body("password").notEmpty(),
];
