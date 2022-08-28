import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './confirm.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ButtonModule} from "../../button/button.module";



@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ButtonModule
  ]
})
export class ConfirmModule { }
