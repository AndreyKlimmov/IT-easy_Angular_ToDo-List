import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() textControl: FormControl = new FormControl;
  //public value = 'Clear me';
  constructor() { }

  ngOnInit(): void {
  }

  public resetControl() {
    this.textControl.reset('')
  }
}
