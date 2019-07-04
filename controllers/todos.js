import express from 'express';
const router = express.Router();
import TodosService from '../services/TodosService';

const todosService = new TodosService();

//GET HTTP method to /todos
router.get('/', todosService.getTodos);

export default router;
