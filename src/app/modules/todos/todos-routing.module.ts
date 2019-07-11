import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddTodoListComponent } from "./containers/add-todo-list";
import { TodoListDetailComponent } from "./containers/todo-list-detail";
import { TodoListsComponent } from "./containers/todo-lists";
import { TodosComponent } from "./todos.component";

const routes: Routes = [
  {
    path: "",
    component: TodosComponent,
    children: [
      { path: "", redirectTo: "todos", pathMatch: "full" },
      { path: "todos", component: TodoListsComponent },
      { path: "todo/:id", component: TodoListDetailComponent },
      { path: "add-todo", component: AddTodoListComponent },
      { path: "**", redirectTo: "" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
