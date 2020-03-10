import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modif-user',
  templateUrl: './dialog-modif-user.component.html',
  styleUrls: ['./dialog-modif-user.component.scss']
})
export class DialogModifUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogModifUserComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  closeDialog(result = null) {
    this.dialogRef.close(result);
  }

  ngOnInit() {}

  onCancel() {
    this.closeDialog();
  }

  onSave(user) {
    this.closeDialog(user);
  }

}
