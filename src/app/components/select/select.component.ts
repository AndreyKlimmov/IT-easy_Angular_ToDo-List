import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskListService} from "../../services/task-list.service";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  public selectedValue: string = '';


  public tasks: { value: string, viewValue: string }[] = [
    {value: 'all-0', viewValue: 'All'},
    {value: 'name-1', viewValue: 'Sort by name'},
    {value: 'date-2', viewValue: 'Sort by date'},
    {value: 'finished-3', viewValue: 'Finished'},
    {value: 'active-4', viewValue: 'Active'},
  ];

  constructor(
  ) {

  }

  ngOnInit(): void {

  }

  public selectFn(): void {
    //this.taskListService.selectValue = this.selectedValue
    //console.log('select', this.taskListService.selectValue);
  }
 }
