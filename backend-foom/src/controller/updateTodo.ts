import type { RequestHandler } from "express";
import Todo from "../model/todoModel.ts";
import type{ TodoParams } from "../type/todoParam.ts";

const updateTodo: RequestHandler<TodoParams> = async (req, res) => {
  try {
    const todoId = req.params.id ;

    if (!req.body) {
      return res.status(400).json({ message: "no data todo to update" });
    }
    const findTodo = await Todo.findByPk(todoId);
    if (!findTodo) {
      return res.status(404).json({ message: "id not valid" });
    }
    const updated = await Todo.update(req.body, { where: { id: todoId } });
    res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: { error } });
  }
};

export default updateTodo;
