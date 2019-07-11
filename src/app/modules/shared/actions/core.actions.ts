import { Action } from "@ngrx/store";

import { Notification } from "../models";

export enum CoreActionTypes {
  Notify = "[Core] Notify",
}

export class SendNotification implements Action {
  public readonly type = CoreActionTypes.Notify;
  constructor(public payload: { notification: Notification }) {}
}

export type CoreActions = SendNotification;
