import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { RoleUser } from 'src/app/interfaces/rolesUser';

@Component({
  selector: 'app-fiche-utilisateur',
  templateUrl: './fiche-utilisateur.component.html',
  styleUrls: ['./fiche-utilisateur.component.scss']
})
export class FicheUtilisateurComponent implements OnInit {

  @Input()
  user: User;
  constructor() { }

  ngOnInit() {
    this.user = {
        nom: 'YADE',
        prenom: 'Ahmadou',
        adresseMail: 'ahmayade@gmail.com',
        role: RoleUser.Admin,
        motDePasse: 'ahmadou'
    };
  }

}
