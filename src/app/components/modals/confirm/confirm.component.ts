import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  constructor(private dialogRef: MatDialogRef<ConfirmComponent>) { }


  close() {
    this.dialogRef.close()
  }

  confirm() {
    this.dialogRef.close(true)
  }
}
