import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { TodoList } from "../../shared/models";
import { RestService } from "../../shared/services";

@Injectable()
export class TodosService {
  constructor(private restService: RestService) {}

  getTodoLists(): Observable<TodoList[]> {
    return this.restService.Todos().getTodos();
  }

  getTodoList(todoListId: string): Observable<TodoList> {
    return this.restService.Todos().getTodoList(todoListId);
  }

  saveTodoList(todoList: TodoList): Observable<any> {
    return this.restService.Todos().saveTodoList(todoList);
  }

  deleleTodoList(todoListId: string): Observable<any> {
    return this.restService.Todos().deleteTodoList(todoListId);
  }
}
