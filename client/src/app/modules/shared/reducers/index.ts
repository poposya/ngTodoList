import { createFeatureSelector, createSelector, ActionReducerMap } from "@ngrx/store";

import * as fromRoot from "../../../reducers";

import * as fromCore from "./core";

export interface SharedState {
  core: fromCore.State;
}

export interface State extends fromRoot.State {
  shared: SharedState;
}

export const reducers: ActionReducerMap<SharedState> = {
  core: fromCore.reducer,
};

export const getSharedState = createFeatureSelector<SharedState>("shared");

// Get Show notification
export const getShowNotification = createSelector(
  getSharedState,
  (state: SharedState) => state.core.notification,
);
