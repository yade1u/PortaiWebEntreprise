import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { NavComponent } from './navigatlion/nav/nav.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { FicheUtilisateurComponent } from './page/fiche-utilisateur/fiche-utilisateur.component';
import { UtilisateursComponent } from './page/utilisateurs/utilisateurs.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { AccueilComponent } from './page/accueil/accueil.component';


export const routes: Routes = [
  { path: 'nav',
    component: NavComponent
  },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardGuard]
  },

  { path: 'dashboard',    component: DashboardComponent },
  { path: 'fiche_utilisateur',    component: FicheUtilisateurComponent },
  { path: 'utilisateurs',    component: UtilisateursComponent },
  { path: 'accueil',    component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
