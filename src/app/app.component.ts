import {Component, OnInit} from '@angular/core';
import {AppInterface} from "./interfaces/app.interface";
import {TaskListService} from "./services/task-list.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConfirmComponent} from "./components/modals/confirm/confirm.component";
import {EditCardModule} from "./components/modals/edit-card/edit-card.module";
import {EditCardComponent} from "./components/modals/edit-card/edit-card.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IT-easy-HW8-Angular-ToDo-List';
  public taskList: AppInterface[] =[];

  constructor(
    private taskListService: TaskListService,
    private dialog: MatDialog
  ) {
  }

  public ngOnInit(): void {
    this.taskList = this.taskListService.getTaskList;
  }

  public handleUpdate(name: string): void {
    this.taskListService.setNewTask = name;
    this.taskList = this.taskListService.getTaskList;
  }

  public changeCardStatus(task: AppInterface): void {
    this.taskListService.setCardStatusById = task.id;
    this.taskList = this.taskListService.getTaskList;
  }

  public deleteTask(task: AppInterface): void {
    const  dialogConfig = new MatDialogConfig()
    dialogConfig.width = '250px'
    const dialogRef = this.dialog.open(ConfirmComponent, dialogConfig)
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskListService.deleteTaskById(task.id)
        this.taskList = this.taskListService.getTaskList
      }
    })

  }

  public editTask(task: AppInterface): void {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '400px'
    dialogConfig.height = '500px'
    dialogConfig.data = task
    const dialogRef = this.dialog.open(EditCardComponent, dialogConfig)
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskListService.updateCardById(task.id, result)
        this.taskList = this.taskListService.getTaskList
      }
    })
  }

}
