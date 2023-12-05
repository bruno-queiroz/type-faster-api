import { CorsOptions } from "cors";

const allowedUrls = ["https://type-faster.vercel.app"];

export const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    console.log("origin request:", origin);
    if (allowedUrls.indexOf(origin || "") !== -1 || origin === undefined) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
