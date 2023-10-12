import { body } from "express-validator";

export const createTextValidator = [
  body("text").notEmpty().isString(),
  body("author").notEmpty().isString(),
  body("title").notEmpty().isString(),
  body("image").custom((value) => {
    if (value === null || (typeof value === "string" && value.trim() !== "")) {
      return true;
    }
    throw new Error("image field should be either null or a non-empty string");
  }),
];
