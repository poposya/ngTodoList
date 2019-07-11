import { TodoList } from "../../shared/models";
import { TodoListsActions, TodoListsActionTypes } from "../actions";

export interface State {
  todos: TodoList[];
}

const initialState: State = {
  todos: [],
};

export function reducer(state: State = initialState, action: TodoListsActions): State {
  switch (action.type) {
    case TodoListsActionTypes.GetTodoListsSuccess:
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
}
export const getTodoLists = (state: State) => state.todos;
