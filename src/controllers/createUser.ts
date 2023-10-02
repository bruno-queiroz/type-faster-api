import { Request, Response } from "express";
import { prisma } from "../app";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create(req.body);

    res.status(201).json({ data: user, message: "User created", isOk: true });
  } catch (err) {
    console.error("Error creating user", err);

    res
      .status(400)
      .json({
        message: "Something went wrong creating user",
        isOk: false,
        code: 400,
      });
  }
};
