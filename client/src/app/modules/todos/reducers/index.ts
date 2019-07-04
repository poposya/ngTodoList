import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromRoot from "../../../reducers";

import * as fromTodoLists from "./todoLists";
import * as fromTodoListDetail from "./todoListDetail";

export interface TodosState {
  todos: fromTodoLists.State;
  todoList: fromTodoListDetail.State;
}

export interface State extends fromRoot.State {
  main: TodosState;
}

export const reducers = {
  todos: fromTodoLists.reducer,
  todoList: fromTodoListDetail.reducer,
};

export const getMainState = createFeatureSelector<TodosState>("main");

export const selectTodoListsState = createSelector(
  getMainState,
  (state: TodosState) => state.todos,
);
export const getTodoLists = createSelector(
  selectTodoListsState,
  fromTodoLists.getTodoLists,
);

export const selectTodoListDetailState = createSelector(
  getMainState,
  (state: TodosState) => state.todoList,
);
export const getTodoList = createSelector(
  selectTodoListDetailState,
  fromTodoListDetail.getTodoList,
);
