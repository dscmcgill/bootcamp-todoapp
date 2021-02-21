import { Request, Response, Router } from "express";
import { Todo } from "../models/todo";

const todoRouter = Router();

// GET /todos -> get all todos
todoRouter.get("/todos", async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong...please try again",
    });
  }
});

// POST /todos -> create a new todo
todoRouter.post("/todos", async (req: Request, res: Response) => {
  try {
    const newTodo = await Todo.create({
      title: req.body.title,
      description: req.body.description,
      status: false,
    });

    res.json(newTodo);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong...please try again",
    });
  }
});

// PUT /todos/:id -> update a todo
todoRouter.put("/todos/:id", async (req: Request, res: Response) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong...please try again",
    });
  }
});

// DELETE /todos/:id -> delete a todo
todoRouter.delete("/todos/:id", async (req: Request, res: Response) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.json(deletedTodo);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong...please try again",
    });
  }
});

export { todoRouter };
