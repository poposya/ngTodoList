import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";

import { TodoList } from "../../../shared/models";
import { GetTodoList } from "../../actions/todo-list-detail.actions";
import * as fromRoot from "../../reducers";

@Component({
  selector: "app-todo-list-detail",
  templateUrl: "./todo-list-detail.component.html",
  styleUrls: ["./todo-list-detail.component.scss"],
})
export class TodoListDetailComponent implements OnInit {
  public todo$: TodoList;
  private _subscriptions: Subscription[] = [];

  public showTodoItemField = false;
  public formSubmitted = false;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private store: Store<fromRoot.State>) {}

  private getTodoList$ = this.store.pipe(select(fromRoot.getTodoList));

  public todoAddItemForm: FormGroup = this.formBuilder.group({
    itemName: ["", [Validators.required]],
    status: ["", []],
  });
  editableItem: number;
  editableFlag: boolean;

  get f() {
    return this.todoAddItemForm.controls;
  }

  editTodoListItem(index) {
    this.editableFlag = !this.editableFlag;
    this.editableItem = index;
  }

  ngOnInit() {
    this._subscriptions.push(
      this.route.paramMap.subscribe(params => {
        this.store.dispatch(new GetTodoList(params.get("id")));
      }),
      this.getTodoList$.subscribe(todo => (this.todo$ = todo)),
    );
  }

  // public removeTodo(todoIndex: number) {
  //   this.todo$ = this.loadTodoListsService.deleteTodoItemByIndex(this.todo$.id, todoIndex);
  // }
  //
  // addTodo() {
  //   this.formSubmitted = true;
  //   if (this.todoAddItemForm.valid) {
  //     this.todo$ = this.loadTodoListsService.addTodoItem(this.todo$.id, {
  //       itemName: this.todoAddItemForm.controls.itemName.value,
  //       status: Boolean(this.todoAddItemForm.controls.status.value),
  //     });
  //   }
  // }

  toggleAddTodoItemField() {
    this.showTodoItemField = true;
  }
}
