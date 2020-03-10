import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { ListUsersService } from 'src/app/service/list-users.service';
import { Utilisateur } from 'src/app/interfaces/Utilisateur';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {
  users: User[];
  // users: Utilisateur[];

  constructor(private listUsersService: ListUsersService) {
  }

  getUsers(): void {
  }

  ngOnInit() {
    this.listUsersService.getAllUser().subscribe(
      (utilisateurs) => {
        this.users = utilisateurs;
        console.log(this.users);
      }
    );
  }

}
