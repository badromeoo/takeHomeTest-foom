import type { RequestHandler } from "express";
import Todo from "../model/todoModel.ts";

const getTodo: RequestHandler = async (req, res) => {
  try {
    const todoData = await Todo.findAll();
    res.status(200).json(todoData);
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: {error} });
  }
};

export default getTodo;
