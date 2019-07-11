import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { TodoItem, TodoList } from "../../../shared/models";
import { EditTodoList } from "../../actions/todo-list-detail.actions";
import * as fromRoot from "../../reducers";

@Component({
  selector: "app-add-todo-list",
  templateUrl: "./add-todo-list.component.html",
  styleUrls: ["./add-todo-list.component.scss"],
})
export class AddTodoListComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private store: Store<fromRoot.State>) {}

  get f() {
    return this.createNewTodoListForm.controls;
  }

  public createNewTodoListForm: FormGroup = this.formBuilder.group({
    name: ["", [Validators.required]],
    itemName: ["", [Validators.required]],
    itemStatus: ["", []],
  });

  formSubmitted: boolean | boolean;
  addedItems: TodoItem[] = [];

  addTodoItemToList() {
    this.addedItems.push({
      itemName: this.createNewTodoListForm.controls.itemName.value,
      status: Boolean(this.createNewTodoListForm.controls.itemStatus.value),
    });
  }

  ngOnInit() {}

  createTodoList() {
    if (this.createNewTodoListForm.valid) {
      const todoListObj: TodoList = {
        name: this.createNewTodoListForm.value.name,
        items: this.addedItems,
      };
      this.store.dispatch(new EditTodoList(todoListObj));
    }
  }
}
