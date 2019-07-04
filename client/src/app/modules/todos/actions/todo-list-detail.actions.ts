import { Action } from "@ngrx/store";

import { TodoList } from "../../shared/models";

export enum TodoListDetailActionTypes {
  GetTodoList = "[Todo List Detail] Get Todo List",
  GetTodoListSuccess = "[Todo List Detail] Get Todo List success",
  GetTodoListFailure = "[Todo List Detail] Get Todo List failure",
  SaveTodoList = "[Todo list Detail] Save Todo List",
  SaveTodoListSuccess = "[Todo list Detail] Save Todo List success",
  SaveTodoListFailure = "[Todo list Detail] Save Todo List failure",
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
export class SaveTodoList implements Action {
  public readonly type = TodoListDetailActionTypes.SaveTodoList;
  constructor(public payload: TodoList) {}
}
export class SaveTodoListSuccess implements Action {
  public readonly type = TodoListDetailActionTypes.SaveTodoListSuccess;
  constructor() {}
}
export class SaveTodoListFailure implements Action {
  public readonly type = TodoListDetailActionTypes.SaveTodoListFailure;
  constructor() {}
}

export type TodoListDetailActions =
  | GetTodoList
  | GetTodoListSuccess
  | GetTodoListFailure
  | SaveTodoList
  | SaveTodoListSuccess
  | SaveTodoListFailure;
