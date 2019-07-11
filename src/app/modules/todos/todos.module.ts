import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { SharedModule } from "../shared/shared.module";

import { AddTodoListComponent } from "./containers/add-todo-list";
import { TodoListDetailComponent } from "./containers/todo-list-detail";
import { TodoListsComponent } from "./containers/todo-lists";
import { TodoListsEffects } from "./effects";
import { reducers } from "./reducers";
import { TodosService } from "./services";
import { TodosRoutingModule } from "./todos-routing.module";
import { TodosComponent } from "./todos.component";

@NgModule({
  declarations: [TodoListsComponent, AddTodoListComponent, TodosComponent, TodoListDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    TodosRoutingModule,
    EffectsModule.forFeature([TodoListsEffects]),
    StoreModule.forFeature("main", reducers),
  ],
  providers: [TodosService],
})
export class TodosModule {}
