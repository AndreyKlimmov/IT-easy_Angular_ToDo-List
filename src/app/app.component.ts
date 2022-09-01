import {Component, OnInit} from '@angular/core';
import {AppInterface} from "./interfaces/app.interface";
import {TaskListService} from "./services/task-list.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConfirmComponent} from "./components/modals/confirm/confirm.component";
import {EditCardComponent} from "./components/modals/edit-card/edit-card.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IT-easy-HW8-Angular-ToDo-List';
  public taskList: AppInterface[] =[];
  public sortedTaskList: AppInterface[] =[];
  public select: string = ''

  constructor(
    private taskListService: TaskListService,
    private dialog: MatDialog,

  ) {
  }

  public ngOnInit(): void {
    this.taskList = this.sortedTaskList = this.taskListService.getTaskList;
    //this.renderCards()
  }

  public handleUpdate(name: string): void {
    this.taskListService.setNewTask = name;
    this.sortedTaskList = this.taskListService.getTaskList;
    this.renderCards()
  }

  public changeCardStatus(task: AppInterface): void {
    this.taskListService.setCardStatusById = task.id;
    this.sortedTaskList = this.taskListService.getTaskList;
    this.renderCards()
  }

  public deleteTask(task: AppInterface): void {
    const  dialogConfig = new MatDialogConfig()
    dialogConfig.width = '250px'
    const dialogRef = this.dialog.open(ConfirmComponent, dialogConfig)
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskListService.deleteTaskById(task.id)
        this.sortedTaskList = this.taskListService.getTaskList;
        this.renderCards()
      }
    })
  }

  public editTask(task: AppInterface): void {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '400px'
    dialogConfig.height = '340px'
    dialogConfig.data = task
    const dialogRef = this.dialog.open(EditCardComponent, dialogConfig)
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskListService.updateCardById(task.id, result)
        this.sortedTaskList = this.taskListService.getTaskList;
        this.renderCards()
      }
    })
  }

  sortAllCards() {
    this.sortedTaskList = this.taskListService.getTaskList
    this.renderCards()
  }

  sortNameCards() {
    this.sortedTaskList = this.taskListService.getTaskList.sort(function (a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });

    this.renderCards()
  }
  sortDateCards() {
    this.sortedTaskList = this.taskListService.getTaskList.sort(function (a, b) {
      if (a.dateOfCreation > b.dateOfCreation) {
        return 1;
      }
      if (a.dateOfCreation < b.dateOfCreation) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });

    this.renderCards()
  }

  sortActiveCards() {
    this.sortedTaskList = this.taskListService.getTaskList.filter((el:AppInterface) => !el.isFinished )
    this.renderCards()
  }

  sortFinishedCards() {
    this.sortedTaskList = this.taskListService.getTaskList.filter((el:AppInterface) => el.isFinished )
    this.renderCards()
  }

  public renderCards(): void {
    this.taskList = this.sortedTaskList
  }

  public selectSort(value: string): void {
    if (value === 'all-0') this.sortAllCards()
    if (value === 'name-1') this.sortNameCards()
    if (value === 'date-2') this.sortDateCards()
    if (value === 'finished-3') this.sortFinishedCards()
    if (value === 'active-4') this.sortActiveCards()
    console.log(value);
  }
}
