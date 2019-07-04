import { Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";

import { TodoList } from "../../../shared/models";

import { GetTodoLists } from "../../actions";
import * as fromRoot from "../../reducers";

@Component({
  selector: "app-todo-lists",
  templateUrl: "./todo-lists.component.html",
  styleUrls: ["./todo-lists.component.scss"],
})
export class TodoListsComponent implements OnInit, OnDestroy {
  constructor(private store: Store<fromRoot.State>) {}
  private _subscriptions: Subscription[] = [];
  public todos: TodoList[] = [];
  private getTodoLists$ = this.store.pipe(select(fromRoot.getTodoLists));

  ngOnInit() {
    this.store.dispatch(new GetTodoLists());

    this._subscriptions.push(this.getTodoLists$.subscribe(todos => (this.todos = todos)));
  }

  ngOnDestroy() {
    this._subscriptions.forEach(s => s.unsubscribe());
  }
}
