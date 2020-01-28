import { Injectable } from '@angular/core';

import { User } from '../interfaces/User';
import { RoleUser } from 'src/app/interfaces/rolesUser';
import { LoginComponent } from '../page/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  users: User[];

  constructor() {
    const user1: User = {
      nom: 'DIALLO',
      prenom: 'Ndéye Mareme',
      adresseMail: 'diallondeyemareme75@gmail.com',
      role: RoleUser.Employe,
      motDePasse: 'ndeyemareme'
    };

    const user2: User = {
      nom: 'YADE',
      prenom: 'Ahmadou',
      adresseMail: 'ahmayade@gmail.com',
      role: RoleUser.Admin,
      motDePasse: 'ahmadou'
    };

    const user3: User = {
      nom: 'SANOH',
      prenom: 'Amara',
      adresseMail: 'sanohamara@gmail.com',
      role: RoleUser.Client,
      motDePasse: 'amara'
    };

    this.users = [user1, user2, user3];
   }

  public getUSERS(): User[] {
    return this.users;
  }

  /*isLoggedIn(): boolean {
    return this.login.isLoggedIn();
  }*/

  isAuthentificated(): boolean {
    return true;
  }
}
