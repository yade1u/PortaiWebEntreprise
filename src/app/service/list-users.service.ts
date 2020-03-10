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

  private users: Observable<User[]>;
  uid: string;

  constructor(private afs: AngularFirestore, private auth: AuthentificationService) { }

  public getAllUser() {
    return this.afs.collection('users').snapshotChanges();
  }

  public getUserConnecte(): Observable<User> {
    this.uid = this.auth.getIdUser();
    return this.afs.doc<User>('users/' + this.uid).valueChanges();
  }

  public editUser(user) {
    return this.afs.collection('users').doc(user.payload.doc.id).set( {
                                                                        email: user.payload.doc.data().email,
                                                                        nom: user.payload.doc.data().nom,
                                                                        prenom: user.payload.doc.data().prenom,
                                                                        phone: user.payload.doc.data().phone,
                                                                        role: user.payload.doc.data().role
                                                                      },
                                                                      { merge: true}
                                                                    );
  }

}
