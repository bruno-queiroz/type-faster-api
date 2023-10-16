import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { createUser } from "../services/createUser";
import { User } from "../repositories/userRepository";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export type UserBody = Omit<User, "picture"> & { image?: string } & {
  [k: string]: string;
};

export const createUserController = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array(), isOk: false, code: 400 });
  }

  try {
    const userBody: UserBody = req.body;
    const newUser = await createUser(userBody);

    res
      .status(201)
      .json({ data: newUser, message: "User created", isOk: true });
  } catch (err) {
    console.error("Error creating user", err);

    if (err instanceof PrismaClientKnownRequestError) {
      const notUniqueFields = err.meta as { target: string[] };

      if (err.code === "P2002") {
        res.status(400).json({
          isOk: false,
          message: `${notUniqueFields.target[0]} must be unique`,
          code: 400,
        });
      }
      return;
    }

    res.status(500).json({
      message: "Something went wrong creating user",
      isOk: false,
      code: 500,
    });
  }
};
