import { Request, Response } from "express";
import { addProgress } from "../services/addProgress";
import { validationResult } from "express-validator";

export interface TypingBody {
  email: string;
  textId: string;
  cpm: string;
  typos: number;
}

export const addProgressController = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array(), isOk: false, code: 400 });
  }

  try {
    const addedTyping = await addProgress(req.body);

    res
      .status(201)
      .json({ data: addedTyping, message: "Added to progress", isOk: true });
  } catch (err) {
    console.error("Error adding to progress", err);

    res.status(500).json({
      message: "Something went wrong adding progress",
      isOk: false,
      code: 500,
    });
  }
};
