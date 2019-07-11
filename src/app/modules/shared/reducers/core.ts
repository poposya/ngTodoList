import { CoreActions, CoreActionTypes } from "../actions";
import { Notification } from "../models";

export interface State {
  notification: Notification;
}

const initialState: State = {
  notification: null,
};

export function reducer(state: State = initialState, action: CoreActions): State {
  switch (action.type) {
    case CoreActionTypes.Notify: {
      return {
        ...state,
        notification: action.payload.notification,
      };
    }

    default:
      return state;
  }
}
