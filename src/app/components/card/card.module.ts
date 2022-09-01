import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    declarations: [
        CardComponent
    ],
    exports: [
        CardComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule
  ]
})
export class CardModule { }
