import { Action } from "@ngrx/store";

import { TodoList } from "../../shared/models";

export enum TodoListsActionTypes {
  GetTodoLists = "[Todo Lists] Get Todo Lists",
  GetTodoListsSuccess = "[Todo Lists] Get Todo Lists success",
  GetTodoListsFailure = "[Todo Lists] Get Todo Lists failure",
  AddTodoList = "[Todo list detail] Add Todo List",
  AddTodoListSuccess = "[Todo list detail] Add Todo List success",
  AddTodoListFailure = "[Todo list detail] Add Todo List failure",
  DeleteTodoList = "[Todo list detail] Delete todo list",
  DeleteTodoListSuccess = "[Todo list detail] Delete todo list success",
  DeleteTodoListFailure = "[Todo list detail] Delete todo list failure",
}

// Get todos
export class GetTodoLists implements Action {
  public readonly type = TodoListsActionTypes.GetTodoLists;
}

export class GetTodoListsSuccess implements Action {
  public readonly type = TodoListsActionTypes.GetTodoListsSuccess;
  constructor(public payload: TodoList[]) {}
}

export class GetTodoListsFailure implements Action {
  public readonly type = TodoListsActionTypes.GetTodoListsFailure;
  constructor() {}
}

// Add todo list
export class AddTodoList implements Action {
  public readonly type = TodoListsActionTypes.AddTodoList;
  constructor(public payload: TodoList) {}
}
export class AddTodoListSuccess implements Action {
  public readonly type = TodoListsActionTypes.AddTodoListSuccess;
  constructor() {}
}
export class AddTodoListFailure implements Action {
  public readonly type = TodoListsActionTypes.AddTodoListFailure;
  constructor() {}
}

// Delete todo list
export class DeleteTodoList implements Action {
  public readonly type = TodoListsActionTypes.DeleteTodoList;
  constructor(public payload: string) {}
}

export class DeleteTodoListSuccess implements Action {
  public readonly type = TodoListsActionTypes.DeleteTodoListSuccess;
  constructor() {}
}

export class DeleteTodoListFailure implements Action {
  public readonly type = TodoListsActionTypes.DeleteTodoListFailure;
  constructor() {}
}

export type TodoListsActions =
  | GetTodoLists
  | GetTodoListsSuccess
  | GetTodoListsFailure
  | AddTodoList
  | AddTodoListSuccess
  | AddTodoListFailure
  | DeleteTodoList
  | DeleteTodoListSuccess
  | DeleteTodoListFailure;
