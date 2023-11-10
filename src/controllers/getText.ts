import { Request, Response } from "express";
import { getText } from "../services/getText";
import { validationResult } from "express-validator";
import { getRepeatedWords } from "../services/getRepeatedWords";

export const getTextController = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
      message: "Invalid query parameter.",
      isOk: false,
      code: 400,
    });
  }

  try {
    const text = await getText();

    res
      .status(200)
      .json({ data: text, message: "Text fetched successfully", isOk: true });
  } catch (err) {
    console.error("Something went wrong getting text", err);

    res.status(500).json({
      message: "Something went wrong fetching text",
      isOk: false,
      code: 500,
    });
  }
};
