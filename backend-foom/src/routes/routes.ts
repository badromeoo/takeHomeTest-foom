import express from "express";
import createTodo from "../controller/createTodo.ts";
import getTodo from "../controller/getTodo.ts";
import updateTodo from "../controller/updateTodo.ts";
import deleteTodo from "../controller/deleteTodo.ts";
import getTodoById from "../controller/getTodoById.ts"
const Router = express.Router();

Router.post("/todos", createTodo);
Router.get("/todos", getTodo);
Router.get("/todos/:id", getTodoById);
Router.put("/todos/:id", updateTodo);
Router.delete("/todos/:id",deleteTodo);

export default Router;
