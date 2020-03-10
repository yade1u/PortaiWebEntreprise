import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { NavComponent } from './navigatlion/nav/nav.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { FicheUtilisateurComponent } from './page/fiche-utilisateur/fiche-utilisateur.component';
import { UtilisateursComponent } from './page/utilisateurs/utilisateurs.component';
import { AccueilComponent } from './page/accueil/accueil.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { ListeNewsComponent } from './page/liste-news/liste-news.component';

import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { customClaims } from '@angular/fire/auth-guard';
import { UpdateComponent } from './update/update/update.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

// const editorOnly = () => pipe(customClaims, map(claims => claims.role === 'Admin'));

export const routes: Routes = [
  { path: 'nav',
    component: NavComponent
  },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard }
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },

  {
    path: 'fiche_utilisateur',
    component: FicheUtilisateurComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },

  {
    path: 'edit/:email',
    component: UpdateComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },

  {
    path: 'utilisateurs',
    component: UtilisateursComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },

  {
    path: 'actualites',
    component: ListeNewsComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },

  {
    path: 'accueil',
    component: AccueilComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
