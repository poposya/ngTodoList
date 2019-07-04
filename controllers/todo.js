import express from 'express';
const router = express.Router();
import TodosService from '../services/TodosService';

const todosService = new TodosService();

// POST HTTP method to /todo
router.post('/', todosService.saveTodoList);

//GET HTTP method to /todo
router.get('/:todoListId', todosService.getTodoById);

//DELETE HTTP method to /todo
router.delete('/:todoListId', todosService.deleteTodoListById);

export default router;
