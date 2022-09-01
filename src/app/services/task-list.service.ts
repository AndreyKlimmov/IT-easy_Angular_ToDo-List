import {Injectable} from "@angular/core";
import {AppInterface} from "../interfaces/app.interface";

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
   private taskList: AppInterface[] = [
    {
      isFinished: true,
      id: 0,
      title: "first todo",
      dateOfCreation: new Date(),
      deadlineDate: new Date(),
    },
    {
      isFinished: false,
      id: 1,
      title: "first todo",
      dateOfCreation: new Date(),
      deadlineDate: new Date(),
    }
  ]

  public get getTaskList(): AppInterface[] {
    return this.taskList
  }

  public set setNewTask(taskTitle: string) {
    const newTask: AppInterface = {
      isFinished: false,
      id: Math.ceil(Math.random()*1000),
      title: taskTitle,
      dateOfCreation: new Date(),
      //deadlineDate: new Date(),
    };
    this.taskList = [...this.taskList, newTask]
  }

  public set setCardStatusById(id: number) {
    this.taskList = this.taskList.map((el: AppInterface ) => {
      return {...el, isFinished: el.id === id ? !el.isFinished : el.isFinished}
    })
  }

  public deleteTaskById(id: number): void {
    this.taskList = this.taskList.filter((el: AppInterface) => el.id != id)
  }

  public updateCardById(id: number, newData: {title: string; deadlineDate: Date}): void {
    this.taskList = this.taskList.map((el: AppInterface) => ({
      ...el,
      title: el.id === id ? newData.title : el.title,
      deadlineDate: el.id === id ? newData.deadlineDate : el.deadlineDate
    }))
  }
}
