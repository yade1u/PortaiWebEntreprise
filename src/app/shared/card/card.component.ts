import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogModifUserComponent } from '../../page/dialogues/dialog-modif-user/dialog-modif-user.component';
import { ListUsersService } from 'src/app/service/list-users.service';
import { RoleUser } from '../../interfaces/rolesUser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  private addDialog: MatDialogRef<DialogModifUserComponent>;
  dialogStatus: boolean = false;

  @Input()
  user: User;
  @Input() currentRole: string;
  rolesInterface = RoleUser;


  constructor(public dialog: MatDialog, private listUsersService: ListUsersService) { }

  ngOnInit() {
  }


  editUser(user: User) {
    this.listUsersService.editUser(user);
    this.hideDialog();
  }

  showDialog(user: User) {
    this.dialogStatus = true;
    this.addDialog = this.dialog.open(DialogModifUserComponent, {
      width: '600px',
      data: { userObject: user }
    });

    this.addDialog.afterClosed().subscribe(user1 => {
      this.dialogStatus = false;
      if (user1) {
        this.editUser(user1);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = false;
    this.addDialog.close();
  }

  isCurrentUser(): boolean {
    return this.user.uid === localStorage.getItem('currentUID');
  }

}
