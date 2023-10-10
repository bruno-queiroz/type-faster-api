import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { createText } from "../services/createText";

export const createTextController = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array(), isOk: false, code: 400 });
  }

  try {
    const textData = req.body;
    const newText = await createText(textData);

    res
      .status(201)
      .json({ data: newText, message: "Text created", isOk: true });
  } catch (err) {
    console.error("Error creating text", err);

    res.status(500).json({
      message: "Something went wrong creating text",
      isOk: false,
      code: 500,
    });
  }
};
