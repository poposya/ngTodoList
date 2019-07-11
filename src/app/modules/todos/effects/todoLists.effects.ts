import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ofType, Actions, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";

import * as fromRoot from "../../../reducers";
import { CoreEffects } from "../../shared/effects/core.effects";
import * as todoListsActions from "../actions/todo-lists.actions";
import { TodosService } from "../services";

@Injectable()
export class TodoListsEffects extends CoreEffects {
  constructor(
    private actions$: Actions,
    private todosService: TodosService,
    protected store: Store<fromRoot.State>,
    protected router: Router,
  ) {
    super(store, router);
  }

  @Effect()
  public getTodoLists$ = this.actions$.pipe(
    ofType(todoListsActions.TodoListsActionTypes.GetTodoLists),
    map((action: todoListsActions.GetTodoLists) => action),
    exhaustMap(() => {
      return this.todosService.getTodoLists().pipe(
        map(data => {
          return new todoListsActions.GetTodoListsSuccess(data);
        }),
        catchError(err => {
          this.commonErrorHandler(err);
          return of(new todoListsActions.GetTodoListsFailure());
        }),
      );
    }),
  );

  @Effect()
  public addTodoList$ = this.actions$.pipe(
    ofType(todoListsActions.TodoListsActionTypes.AddTodoList),
    map((action: todoListsActions.AddTodoList) => action.payload),
    exhaustMap(payload => {
      return this.todosService.addTodoList(payload).pipe(
        map(() => {
          return new todoListsActions.AddTodoListSuccess();
        }),
        catchError(err => {
          this.commonErrorHandler(err);
          return of(new todoListsActions.AddTodoListFailure());
        }),
      );
    }),
  );

  @Effect()
  public deleteTodoList$ = this.actions$.pipe(
    ofType(todoListsActions.TodoListsActionTypes.DeleteTodoList),
    map((action: todoListsActions.DeleteTodoList) => action.payload),
    exhaustMap(payload => {
      return this.todosService.deleteTodoList(payload).pipe(
        map(() => {
          return new todoListsActions.DeleteTodoListSuccess();
        }),
        catchError(err => {
          this.commonErrorHandler(err);
          return of(new todoListsActions.DeleteTodoListFailure());
        }),
      );
    }),
  );
}
