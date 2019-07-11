import { Action } from "@ngrx/store";

import { TodoList } from "../../shared/models";

export enum TodoListDetailActionTypes {
  GetTodoList = "[Todo List Detail] Get Todo List",
  GetTodoListSuccess = "[Todo List Detail] Get Todo List success",
  GetTodoListFailure = "[Todo List Detail] Get Todo List failure",
  EditTodoList = "[Todo list Detail] Save Todo List",
  EditTodoListSuccess = "[Todo list Detail] Save Todo List success",
  EditTodoListFailure = "[Todo list Detail] Save Todo List failure",
}

// Get todo list
export class GetTodoList implements Action {
  public readonly type = TodoListDetailActionTypes.GetTodoList;
  constructor(public payload: string) {}
}
export class GetTodoListSuccess implements Action {
  public readonly type = TodoListDetailActionTypes.GetTodoListSuccess;
  constructor(public payload: TodoList) {}
}
export class GetTodoListFailure implements Action {
  public readonly type = TodoListDetailActionTypes.GetTodoListFailure;
  constructor() {}
}

// Save todo list
export class EditTodoList implements Action {
  public readonly type = TodoListDetailActionTypes.EditTodoList;
  constructor(public payload: TodoList) {}
}
export class EditTodoListSuccess implements Action {
  public readonly type = TodoListDetailActionTypes.EditTodoListSuccess;
  constructor() {}
}
export class EditTodoListFailure implements Action {
  public readonly type = TodoListDetailActionTypes.EditTodoListFailure;
  constructor() {}
}

export type TodoListDetailActions =
  | GetTodoList
  | GetTodoListSuccess
  | GetTodoListFailure
  | EditTodoList
  | EditTodoListSuccess
  | EditTodoListFailure;
