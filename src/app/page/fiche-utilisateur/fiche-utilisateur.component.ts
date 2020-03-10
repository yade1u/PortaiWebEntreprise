import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { ListUsersService } from 'src/app/service/list-users.service';

@Component({
  selector: 'app-fiche-utilisateur',
  templateUrl: './fiche-utilisateur.component.html',
  styleUrls: ['./fiche-utilisateur.component.scss']
})
export class FicheUtilisateurComponent implements OnInit {

  @Input()
  user: User;

  constructor(private listUsersService: ListUsersService) {
  }

  ngOnInit() {
    this.listUsersService.getUserConnecte().subscribe(
      (utilisateur) => {
        this.user = utilisateur;
        console.log('User connecté dans Fiche utilisateur' + this.user);
      }
    );
  }

}
