import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './page/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './page/accueil/accueil.component';
import { NavComponent } from './navigatlion/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FicheUtilisateurComponent } from './page/fiche-utilisateur/fiche-utilisateur.component';
import { UtilisateursComponent } from './page/utilisateurs/utilisateurs.component';
import { NewsComponent } from './page/news/news.component';
import { ListeNewsComponent } from './page/liste-news/liste-news.component';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AddDialogComponent } from './page/dialogues/add-dialog/add-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormulaireComponent } from './shared/formulaire/formulaire.component';
import { CardComponent } from './shared/card/card.component';
import { DialogModifUserComponent } from './page/dialogues/dialog-modif-user/dialog-modif-user.component';
import { ModifierUserComponent } from './shared/modifier-user/modifier-user.component';
import { UpdateComponent } from './update/update/update.component';
import { LireNewsComponent } from './page/lire-news/lire-news.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    NavComponent,
    DashboardComponent,
    FicheUtilisateurComponent,
    UtilisateursComponent,
    NewsComponent,
    ListeNewsComponent,
    AddDialogComponent,
    FormulaireComponent,
    CardComponent,
    DialogModifUserComponent,
    ModifierUserComponent,
    UpdateComponent,
    LireNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    MatDialogModule,
  ],
  entryComponents: [AddDialogComponent, DialogModifUserComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

