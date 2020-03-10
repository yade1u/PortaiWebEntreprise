import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { ListUsersService } from 'src/app/service/list-users.service';
import { Utilisateur } from 'src/app/interfaces/Utilisateur';
import { AddDialogComponent } from '../dialogues/add-dialog/add-dialog.component';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {
  users;

  constructor(private listUsersService: ListUsersService) {}

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser = () => this.listUsersService.getAllUser().subscribe(res => (this.users = res) );

}

