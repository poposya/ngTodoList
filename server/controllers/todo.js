import TodoService from '../services/TodoService';
import { ApplicationError } from "../models/errors";

const todoService = new TodoService();

export class TodoController {
  constructor() {};

  getTodoById(req, res) {
    try {
      todoService.getTodoById(req.params('id'))
        .then(todo => res.status(200).send(todo));
    } catch (e) {
      res.status(400).send(new ApplicationError('No todo list found.'));
    }
  }

  updateTodoList(req, res) {
    try {
      todoService.saveTodoList(req.body)
        .then(result => res.status(200).send(result));
    } catch (e) {
      res.status(400).send(new ApplicationError());
    }
  }

}
