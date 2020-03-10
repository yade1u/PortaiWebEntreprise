
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;

  email: string;
  password: string;


  constructor(private fb: FormBuilder,
              private authService: AuthentificationService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPassword: ['', Validators.required],
    });
  }

  seConnecter() {
    this.authService.signInUser(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  OnSubmitLogin() {
    this.email = this.loginForm.get('loginEmail').value;
    this.password = this.loginForm.get('loginPassword').value;
    this.seConnecter();
    console.log('Après connexion');
  }
}

