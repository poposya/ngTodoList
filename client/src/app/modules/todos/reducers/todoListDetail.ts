import { TodoList } from "../../shared/models";
import { TodoListDetailActions, TodoListDetailActionTypes } from "../actions/todo-list-detail.actions";

export interface State {
  todoList: TodoList;
}

const initialState: State = {
  todoList: null,
};

export function reducer(state: State = initialState, action: TodoListDetailActions): State {
  switch (action.type) {
    case TodoListDetailActionTypes.GetTodoListSuccess:
      return {
        ...state,
        todoList: action.payload,
      };

    default:
      return state;
  }
}

export const getTodoList = (state: State) => state.todoList;
