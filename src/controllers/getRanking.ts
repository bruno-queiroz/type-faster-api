import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { getRanking } from "../services/getRanking";

export const getRankingController = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array(), isOk: false, code: 400 });
  }

  try {
    const top10 = await getRanking(req.params?.textId);

    res
      .status(200)
      .json({ data: top10, message: "Rank fetched successfully", isOk: true });
  } catch (err) {
    console.error("Error getting rank", err);

    res.status(500).json({
      message: "Something went wrong getting rank",
      isOk: false,
      code: 500,
    });
  }
};
