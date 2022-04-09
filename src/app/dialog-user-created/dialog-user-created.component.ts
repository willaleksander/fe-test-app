import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-user-created',
  templateUrl: 'dialog-user-created.component.html',
})
export class DialogUserCreated {
  constructor(
    public dialogRef: MatDialogRef<DialogUserCreated>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}