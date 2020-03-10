import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModifierUserComponent } from 'src/app/shared/modifier-user/modifier-user.component';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-dialog-modif-user',
  templateUrl: './dialog-modif-user.component.html',
  styleUrls: ['./dialog-modif-user.component.scss']
})
export class DialogModifUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModifierUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  closeDialog(result = null) {
    this.dialogRef.close(result);
  }

  annuler() {
    this.closeDialog();
  }

  enregister(user) {
    this.closeDialog(user);
  }

}
