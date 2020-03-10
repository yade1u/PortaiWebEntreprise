import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modif-user',
  templateUrl: './dialog-modif-user.component.html',
  styleUrls: ['./dialog-modif-user.component.scss']
})
export class DialogModifUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
