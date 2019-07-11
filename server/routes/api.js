const express = require('express');
const router = express.Router();
import {TodosController} from '../controllers/todos';
import {TodoController} from '../controllers/todo';

const todosCtrl = new TodosController();
const todoCtrl = new TodoController();

// ROUTES

// GET Get todo lists route
router.get('/todos', todosCtrl.getTodos);

// POST Create todo list route
router.post('/todos', todosCtrl.addTodoList);

// DELETE Delete todo list by id route
router.delete('/todos/:id', todosCtrl.deleteTodoListById);

// GET Get todo list by id route
router.get('/todo/:id', todoCtrl.getTodoById);

// PUT Update todo list route
router.put('/todo', todoCtrl.updateTodoList);

module.exports = router;
