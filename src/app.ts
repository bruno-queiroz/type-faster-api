import express from "express";
import env from "dotenv";
import cors from "cors";
import { corsOptions } from "./cors/config";
env.config();

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log("server running at port", port);
});
