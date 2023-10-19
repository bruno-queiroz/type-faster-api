import { Request, Response } from "express";
import { getText } from "../services/getText";

export const getTextController = async (req: Request, res: Response) => {
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
