import express from "express";
import env from "dotenv";

env.config();

const app = express();

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log("server running at port", port);
});
