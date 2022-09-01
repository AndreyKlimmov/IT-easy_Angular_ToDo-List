import {Component, OnInit} from '@angular/core';
import {TaskListService} from "../../services/task-list.service";
import {AppComponent} from "../../app.component";

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

  constructor(public appComp: AppComponent
  ) {

  }

  ngOnInit(): void {

  }

  public selectFn(): void {
    this.appComp.selectSort(this.selectedValue)
    this.selectedValue = this.appComp.select
  }
 }
