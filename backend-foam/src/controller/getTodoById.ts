import type { RequestHandler } from "express";
import Todo from "../model/todoModel.ts";
import type { TodoParams } from "../type/todoParam.ts";

const getTodoById: RequestHandler<TodoParams> = async (req, res) => {
  try {
    const todoId = req.params.id;
    const findTodo = await Todo.findByPk(todoId);
    
    if (!findTodo) {
      return res.status(404).json({ message: "Todo tidak ditemukan" });
    }
    res.status(200).json(findTodo);
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};

export default getTodoById;