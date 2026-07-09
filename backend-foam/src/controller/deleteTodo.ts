import type { RequestHandler } from "express";
import Todo from "../model/todoModel.ts";
import type { TodoParams } from "../type/todoParam.ts";
const deleteTodo: RequestHandler<TodoParams> = async (req, res) => {
  try {
    const todoId = req.params.id;
    if (!todoId) {
      return res.status(404).json({ message: "there is no id" });
    }
     const findTodo = await Todo.findByPk(todoId);
     if (!findTodo) {
      return res.status(404).json({ message: "id not valid" });
    }
    const remove = await Todo.destroy({ where: { id: todoId } });
    res.status(200).json({message:"data removed"})
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: { error } });
  }
};

export default deleteTodo;
