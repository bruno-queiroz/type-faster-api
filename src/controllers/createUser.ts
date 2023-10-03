import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { createUser } from "../services/createUser";
import { User } from "../repositories/userRepository";

export const createUserController = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array(), isOk: false, code: 400 });
  }

  try {
    const userBody: User = req.body;
    const newUser = createUser(userBody);

    res
      .status(201)
      .json({ data: newUser, message: "User created", isOk: true });
  } catch (err) {
    console.error("Error creating user", err);

    res.status(400).json({
      message: "Something went wrong creating user",
      isOk: false,
      code: 400,
    });
  }
};
