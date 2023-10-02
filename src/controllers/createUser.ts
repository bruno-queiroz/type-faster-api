import { Request, Response } from "express";
import { prisma } from "../app";
import { validationResult } from "express-validator";

export const createUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array(), isOk: false, code: 400 });
  }

  try {
    const user = await prisma.user.create({
      data: req.body,
    });

    res.status(201).json({ data: user, message: "User created", isOk: true });
  } catch (err) {
    console.error("Error creating user", err);

    res.status(400).json({
      message: "Something went wrong creating user",
      isOk: false,
      code: 400,
    });
  }
};
