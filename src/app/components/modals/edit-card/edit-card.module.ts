import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCardComponent } from './edit-card.component';
import {ButtonModule} from "../../button/button.module";
import {InputModule} from "../../input/input.module";
import {MatDialogModule} from "@angular/material/dialog";
import {DatePickerModule} from "../../date-picker/date-picker.module";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    EditCardComponent
  ],
    imports: [
        CommonModule,
        ButtonModule,
        InputModule,
        MatDialogModule,
        DatePickerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule
    ],
  providers: [
    MatDatepickerModule
  ]
})
export class EditCardModule { }
