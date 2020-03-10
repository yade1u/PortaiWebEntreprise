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

  signInUser(email: string, password: string) {
    this.afas.auth.signInWithEmailAndPassword(email, password).then(
      res => {
        this.router.navigate(['dashboard']);
        console.log('You are Successfully logged in!');
        console.log(res.user.uid);
        this.idUser = res.user.uid;

      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
    }
    );
  }

  signOutUser() {
    this.afas.auth.signOut();
  }

  getIdUser(): string {
    return this.idUser;
  }
}
