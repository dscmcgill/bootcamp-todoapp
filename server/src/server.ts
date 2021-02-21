// 1. import packages
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { todoRouter } from "./routes/todo";
import mongoose from "mongoose";

// 2. initalizing express app
const app = express();

mongoose.connect("mongodb://localhost:27017/todoapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 3. use packages
app.use(bodyParser.json());
app.use(cors());
app.use(todoRouter);

// 4. running server
// port number, callback function
app.listen(3000, () => {
  console.log("Server running on port 3000...");
});
