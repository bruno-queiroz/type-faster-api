import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { signInUser } from "../services/signInUser";
import { IncorrectPassword } from "../errors/IncorrectPassword";
import { UserNotFound } from "../errors/UserNotFound";

export const signInUserController = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array(), isOk: false, code: 400 });
  }

  try {
    const userData = req.body as { email: string; password: string };
    const user = await signInUser(userData.email, userData.password);

    res.status(200).json({ data: user, message: "User logged", isOk: true });
  } catch (err) {
    console.error("Error signing in user", err);

    if (err instanceof IncorrectPassword || err instanceof UserNotFound) {
      res.status(400).json({
        message: err.message,
        isOk: false,
        code: 400,
      });
      return;
    }

    res.status(500).json({
      message: "Something went wrong signing in",
      isOk: false,
      code: 500,
    });
  }
};
