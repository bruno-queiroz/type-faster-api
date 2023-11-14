import { Request, Response } from "express";
import { createWord } from "../services/createWord";
import { validationResult } from "express-validator";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const createWordController = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array(), isOk: false, code: 400 });
  }

  try {
    const addedWord = await createWord(req.body.word);

    res
      .status(201)
      .json({ data: addedWord, message: "Word added", isOk: true });
  } catch (err) {
    console.error("Error Adding word", err);

    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        res.status(400).json({
          isOk: false,
          message: "Word must be unique",
          code: 400,
        });
      }
      return;
    }

    res.status(500).json({
      message: "Something went wrong Adding word",
      isOk: false,
      code: 500,
    });
  }
};
