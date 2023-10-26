import express from "express";
import env from "dotenv";
import cors from "cors";
import { corsOptions } from "./cors/config";
import { PrismaClient } from "@prisma/client";

import userRoutes from "./routes/user.routes";
import textRoutes from "./routes/text.routes";
import progressRoutes from "./routes/progress.routes";
import rankingRoutes from "./routes/ranking.routes";

env.config();

export const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/text", textRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/ranking", rankingRoutes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log("server running at port", port);
});
