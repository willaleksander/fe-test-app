import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GlobalConstrants } from '../common/global-constrants';

export interface DialogData {
  animal: string;
  name: string;
}

/*
Angular simple dialog to alert the user creation
*/
@Component({
  selector: 'dialog-user-created',
  templateUrl: 'dialog-user-created.component.html',
})
export class DialogUserCreated {
  gc = GlobalConstrants;

  constructor(
    public dialogRef: MatDialogRef<DialogUserCreated>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}