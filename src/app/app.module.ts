import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from "./components/header/header.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from "./components/card/card.module";
import {ConfirmModule} from "./components/modals/confirm/confirm.module";
import {EditCardModule} from "./components/modals/edit-card/edit-card.module";
import {SelectModule} from "./components/select/select.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    BrowserAnimationsModule,
    CardModule,
    ConfirmModule,
    EditCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
