import { Action } from "@ngrx/store";

import { TodoList } from "../../shared/models";

export enum TodoListsActionTypes {
  GetTodoLists = "[Todo Lists] Get Todo Lists",
  GetTodoListsSuccess = "[Todo Lists] Get Todo Lists success",
  GetTodoListsFailure = "[Todo Lists] Get Todo Lists failure",
  DeleteTodoList = "[Todo Lists] Delete todo list",
  DeleteTodoListSuccess = "[Todo Lists] Delete todo list success",
  DeleteTodoListFailure = "[Todo Lists] Delete todo list failure",
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
  | DeleteTodoList
  | DeleteTodoListSuccess
  | DeleteTodoListFailure;
