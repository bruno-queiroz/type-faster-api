import { param } from "express-validator";

export const getProgressValidator = [param("email").exists()];
