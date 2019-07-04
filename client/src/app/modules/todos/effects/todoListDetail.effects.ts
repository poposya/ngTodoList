import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ofType, Actions, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";

import * as fromRoot from "../../../reducers";
import { CoreEffects } from "../../shared/effects/core.effects";
import * as todoListDetailActions from "../actions/todo-list-detail.actions";
import { TodosService } from "../services";

@Injectable()
export class TodoListDetailEffects extends CoreEffects {
  constructor(
    private actions$: Actions,
    private todosService: TodosService,
    protected store: Store<fromRoot.State>,
    protected router: Router,
  ) {
    super(store, router);
  }

  @Effect()
  public getTodoList$ = this.actions$.pipe(
    ofType(todoListDetailActions.TodoListDetailActionTypes.GetTodoList),
    map((action: todoListDetailActions.GetTodoList) => action.payload),
    exhaustMap(payload => {
      return this.todosService.getTodoList(payload).pipe(
        map(data => {
          return new todoListDetailActions.GetTodoListSuccess(data);
        }),
        catchError(err => {
          this.commonErrorHandler(err);
          return of(new todoListDetailActions.GetTodoListFailure());
        }),
      );
    }),
  );

  @Effect()
  public saveTodoList$ = this.actions$.pipe(
    ofType(todoListDetailActions.TodoListDetailActionTypes.SaveTodoList),
    map((action: todoListDetailActions.SaveTodoList) => action.payload),
    exhaustMap(payload => {
      return this.todosService.saveTodoList(payload).pipe(
        map(() => {
          return new todoListDetailActions.SaveTodoListSuccess();
        }),
        catchError(err => {
          this.commonErrorHandler(err);
          return of(new todoListDetailActions.SaveTodoListFailure());
        }),
      );
    }),
  );
}
