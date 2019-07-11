import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatListModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ToastrModule } from "ngx-toastr";

import { HeaderComponent } from "./components";
import { CoreEffects } from "./effects/core.effects";
import { reducers } from "./reducers";
import { RestService } from "./services";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    ToastrModule,
    StoreModule.forFeature("shared", reducers),
    EffectsModule.forFeature([CoreEffects]),
  ],
  exports: [
    // modules
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderComponent,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    ToastrModule,
  ],
  declarations: [HeaderComponent],
  providers: [RestService],
})
export class SharedModule {}
