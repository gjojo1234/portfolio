import express from "express";
const app = express();

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRouter.js";
import feedbackRouter from "./routes/feedbackRouter.js";

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use("/auth", authRouter);
app.use("/feedback", feedbackRouter);

app.get("/data", (req, res) => {
  res.json({ msg: "hello" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is starting on port: ${port}....`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
