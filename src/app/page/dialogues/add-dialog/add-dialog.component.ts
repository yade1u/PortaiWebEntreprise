import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>) {}

  closeDialog(result = null) {
    this.dialogRef.close(result);
  }

  ngOnInit() {}

  onCancel() {
    this.closeDialog();
  }

  onSave(actualite) {
    this.closeDialog(actualite);
  }

}
