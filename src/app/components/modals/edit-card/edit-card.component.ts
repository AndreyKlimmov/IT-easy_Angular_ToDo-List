import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AppInterface} from "../../../interfaces/app.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
  public formGroup: FormGroup | any = new FormGroup<any>({})
  public modalData!: AppInterface

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: AppInterface,
    private dialogRef: MatDialogRef<EditCardComponent>
  ) { }

  ngOnInit(): void {
    this.modalData = this.data
    this.initFormGroup()
  }

  public close(): void {
    this.dialogRef.close()
  }

  public saveChanges(): void {
    this.dialogRef.close(this.formGroup.value)
  }

  private initFormGroup(): void {
    this.formGroup.setControl(
      'title',
      new FormControl(this.modalData.title),
      [Validators.required]
    )
    this.formGroup.setControl(
      'deadlineDate',
      new FormControl(this.modalData.deadlineDate || ''),
      [Validators.required])
  }

}
