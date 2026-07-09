import type { RequestHandler } from "express";
import Todo from "../model/todoModel.ts";

const createTodo: RequestHandler = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ message: "title required" });
    }
    const create = await Todo.create({
      title,
      description,
    });
    return res.status(200).json(create);
  } catch(error) {
   res.status(500).json({ message: "internal server error", error: {error} });
  }
};

export default createTodo;
