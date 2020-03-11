import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  idUser: any;
  estAuthentifie: boolean;
  userData: Observable<firebase.User>;

  constructor(private afas: AngularFireAuth, private router: Router) {
    this.userData = afas.authState;
  }

  isLoggedIn(): boolean {
    return this.afas.user !== null;
  }

  signInUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afas.auth.signInWithEmailAndPassword(email, password).then();
  }

  signOutUser() {
    this.afas.auth.signOut();
  }

  getIdUser(): string {
    return this.idUser;
  }
}
