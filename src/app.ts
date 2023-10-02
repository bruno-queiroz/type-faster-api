import express from "express";
import env from "dotenv";
import cors from "cors";
import { corsOptions } from "./cors/config";
import { PrismaClient } from "@prisma/client";

import userRoutes from "./routes/user.routes";
env.config();

export const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log("server running at port", port);
});
