import { Request, Response } from "express";
import { getProgress } from "../services/getProgress";
import { validationResult } from "express-validator";

export const getProgressController = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array(), isOk: false, code: 400 });
  }

  try {
    const progress = await getProgress(req.params.email);

    res.status(200).json({
      data: progress,
      message: "Progress fetched successfully",
      isOk: true,
    });
  } catch (err) {
    console.error("Error Getting progress", err);

    res.status(500).json({
      data: [],
      message: "Something went wrong getting progress",
      isOk: false,
      code: 500,
    });
  }
};
