import { Request, Response } from "express";

export const spinUpServer = (req: Request, res: Response) => {
  return res.sendStatus(204);
};
