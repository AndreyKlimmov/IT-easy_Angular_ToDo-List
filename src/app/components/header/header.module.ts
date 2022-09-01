import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {ButtonModule} from "../button/button.module";
import {InputModule} from "../input/input.module";
import {SelectModule} from "../select/select.module";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
  imports: [
    CommonModule,
    ButtonModule,
    InputModule,
    SelectModule
  ]
})
export class HeaderModule { }
