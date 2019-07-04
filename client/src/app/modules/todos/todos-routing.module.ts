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
      { path: "", redirectTo: "todoLists", pathMatch: "full" },
      { path: "todoLists", component: TodoListsComponent },
      { path: "todoList/:id", component: TodoListDetailComponent },
      { path: "addTodoList", component: AddTodoListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
