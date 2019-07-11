import TodosService from '../services/TodosService';
import { ApplicationError } from '../models/errors';

const todosService = new TodosService();

export class TodosController {
  constructor() {};

  getTodos(req, res) {
    try {
      todosService.getTodos()
        .then(todos => res.status(200).send(todos));
    } catch (e) {
      res.status(400).send(new ApplicationError())
    }
  }

  addTodoList(req, res) {
    try {
      todosService.addTodoList(req.body)
        .then(result => res.status(201).send(result))
    } catch (e) {
      res.status(400).send(new ApplicationError());
    }
  }

  deleteTodoListById(req, res) {
    try {
      todosService.deleteTodoListById(req.params('id'))
        .then(result => res.status(200).send(result))
    } catch (e) {
      res.status(400).send(new ApplicationError());
    }
  }
}
