import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import * as fromRoot from "../../../reducers";
import { SendNotification } from "../actions";

@Injectable()
export class CoreEffects {
  constructor(protected store: Store<fromRoot.State>, protected router: Router) {}

  public sendNotification(type, heading, message) {
    this.store.dispatch(
      new SendNotification({
        notification: {
          type,
          heading,
          message,
        },
      }),
    );
  }

  public commonSuccessHandler(successfullyMessage) {
    this.sendNotification("success", "", successfullyMessage);
  }

  public commonErrorHandler(err) {
    this.sendNotification("error", "Error occurred", err.message);
  }
}
