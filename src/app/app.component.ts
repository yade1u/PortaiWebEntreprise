import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projet Portail Web';
  isAuth: boolean;

  constructor(public authService: AuthentificationService) {
  }

  ngOnInit() {
    // this.isAuth = this.authService.estConnecte();
  }

  logout() {
    this.authService.signOutUser();
  }

  isLogged() {
    return this.authService.isLoggedIn();
  }

}
