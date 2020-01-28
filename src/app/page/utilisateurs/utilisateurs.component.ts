import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { ListUsersService } from 'src/app/service/list-users.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {
  users: User[];

  constructor(private listUsersService: ListUsersService) {
  }

  getUsers(): void {
    this.users = this.listUsersService.getUSERS();
  }

  ngOnInit() {
    this.getUsers();
  }

}
