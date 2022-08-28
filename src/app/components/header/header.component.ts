import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {TaskListService} from "../../services/task-list.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() updateEvent: EventEmitter<string> = new EventEmitter<string>();

  public taskControl: FormControl = new FormControl('Task title', [Validators.required]);

  //constructor(private taskListService: TaskListService) { }

  ngOnInit(): void {
  }

  public createTask() {
    //this.taskListService.setNewTask = this.taskControl.value;
    this.updateEvent.emit(this.taskControl.value)
    this.taskControl.reset('')
  }
}
