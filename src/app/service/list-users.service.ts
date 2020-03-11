import { Injectable } from '@angular/core';

import { User } from '../interfaces/User';
import { LoginComponent } from '../page/login/login.component';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Utilisateur } from '../interfaces/Utilisateur';
import { element } from 'protractor';
import { AuthentificationService } from './authentification.service';
import { RoleUser } from '../interfaces/rolesUser';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  private users: Observable<User[]>;
  uid: string;

  constructor(private afs: AngularFirestore, private auth: AuthentificationService) {  }

  public getAllUser(): Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges();
  }

  public getUserConnecte(): Observable<User> {
    this.uid = localStorage.getItem('currentUID');
    return this.afs.doc<User>('users/' + this.uid).valueChanges();
  }

  public editUser(user: User) {
    this.afs.collection<User>('users').doc(user.uid).set(user);
  }

  public getCurrentRole(): void {
    this.getUserConnecte().subscribe(
      user => {
        localStorage.setItem('currentRole', user.role);
        localStorage.setItem('currentUserName', user.prenom + ' ' + user.nom + ' ( ' + user.role + ' ) ');
      }
    );
  }

  public isAdmin(): boolean {
    this.getCurrentRole();
    return localStorage.getItem('currentRole') === RoleUser.Admin;
  }

  public isClient(): boolean {
    this.getCurrentRole();
    return localStorage.getItem('currentRole') === RoleUser.Client;
  }

  public isEmploye(): boolean {
    this.getCurrentRole();
    return localStorage.getItem('currentRole') === RoleUser.Employe;
  }

  public giveCurrentRole(): string {
    this.getCurrentRole();
    return localStorage.getItem('currentRole');
  }
}
