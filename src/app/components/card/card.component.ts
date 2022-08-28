import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppInterface} from "../../interfaces/app.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardNumber: number = 0;
  @Input() taskObj!: AppInterface;
  @Output() changeCardStatus: EventEmitter<void> = new EventEmitter<void>()
  @Output() deleteCardEvent: EventEmitter<void> = new EventEmitter<void>()
  @Output() editCardEvent: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  public cardStatusChange(): void {
    this.changeCardStatus.emit()
    //this.taskObj.isFinished = !this.taskObj.isFinished;
  }

  public editCard(): void {
    this.editCardEvent.emit()
  }

  public deleteCard(): void {
    this.deleteCardEvent.emit()
  }

}
