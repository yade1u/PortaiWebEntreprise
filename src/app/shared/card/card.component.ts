import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogModifUserComponent } from '../../page/dialogues/dialog-modif-user/dialog-modif-user.component';
import { ListUsersService } from 'src/app/service/list-users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  private addDialog: MatDialogRef<DialogModifUserComponent>;
  dialogStatus: boolean = false;

  @Input()
  user;

  constructor(public dialog: MatDialog, private listUsersService: ListUsersService) {
    // this.user = null;
  }

  ngOnInit() {
  }

  editUser(user) {
    this.listUsersService.editUser(user);
  }

  showDialog(user) {
    console.log(user.payload.doc.data().email);
    this.dialogStatus = true;
    this.addDialog = this.dialog.open(DialogModifUserComponent, {
      width: '600px',
      data: { userObject: user }
    });

    this.addDialog.afterClosed().subscribe(user1 => {
      console.log(user1.payload.doc.data().email);
      this.dialogStatus = false;
      this.editUser(user1);
      this.hideDialog();

      // if (user) {
      //   this.editUser(user);
      // }
    });
  }

  hideDialog() {
    this.dialogStatus = false;
    this.addDialog.close();
  }

}
