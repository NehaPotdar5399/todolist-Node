const express = require("express");
const router = express.Router();


const todo = require("../controller/controller");


router.param("todoId", todo.getTodoById);


router.get("/todos/", todo.getAllTodos);


router.get("/todo/:todoId/", todo.getTodo);

router.post("/todo/create/", todo.createTodo);


router.put("/todo/:todoId/update", todo.updateTodo);

router.delete("/todo/:todoId/delete", todo.deleteTodo);


module.exports = router;
