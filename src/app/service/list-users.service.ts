import { Injectable } from '@angular/core';

import { User } from '../interfaces/User';
import { RoleUser } from 'src/app/interfaces/rolesUser';
import { LoginComponent } from '../page/login/login.component';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Utilisateur } from '../interfaces/Utilisateur';
import { element } from 'protractor';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  users: User[];
  uid: string;

  constructor(private afs: AngularFirestore, private auth: AuthentificationService) {
  }

  public getAllUser(): Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges();
  }

  public getUserConnecte(): Observable<User> {
    this.uid = this.auth.getIdUser();
    // console.log('Je suis dans getUserConnecte uid = ' + this.uid);
    /*this.afs.doc<User>('users/oSkcQoFhSJQ9LRYspyFAae2HaX42').collection<User>('users').valueChanges().subscribe(
      util => console.log('Suis dans getUserConn user = ' + util)
    );*/
    return this.afs.doc<User>('users/' + this.uid).valueChanges();
    // return this.afs.doc<User>('users/oSkcQoFhSJQ9LRYspyFAae2HaX42').valueChanges();
  }

  public getUSERS(): User[] {
    // this.getAllUser();
    return this.users;
  }
}
