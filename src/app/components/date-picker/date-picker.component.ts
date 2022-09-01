import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Input() control: FormControl | any = new FormControl('')
  @Input() label: string = ''

  constructor() { }

  ngOnInit(): void {
  }
}
