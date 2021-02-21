import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  title: String,
  description: String,
  status: Boolean,
});

const Todo = model("Todo", todoSchema);

export { Todo };
