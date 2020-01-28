
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // userService: ListUsersService;
  // loginUser = false;

  loginForm = this.fb.group({
    loginEmail: ['', [Validators.required, Validators.email]],
    loginPassword: ['', Validators.required],
  });

  @Input()
  email: string;

  @Input()
  password: string;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.email = 'Saisissez votre email';
    this.password = 'Saisissez votre mot de passe';
  }

  /*isLoggedIn(): boolean {
    console.log('Je suis dans isloggedIn je retourne : ' + this.loginUser );
    return this.loginUser;
  }*/

  OnSubmitLogin() {
    const mail: string = this.loginForm.get('loginEmail').value;
    const mdp: string = this.loginForm.get('loginPassword').value;

    /*(this.userService.getUSERS()).forEach(element => {
      if (element.adresseMail === mail && element.motDePasse === mdp) {
        this.loginUser = true;
      }
    });*/
    /*console.log('Je suis avant le if' );
    if (mail === 'ahmayade@gmail.com' && mdp === 'ahmadou') {
      console.log('Je suis dans le if' );
      this.loginUser = true;
      this.router.navigate(['']);
    }*/
    this.router.navigate(['accueil']);
  }
}

