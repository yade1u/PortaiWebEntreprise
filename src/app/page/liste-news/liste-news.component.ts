import { Component, OnInit } from '@angular/core';
import { Actualite } from 'src/app/interfaces/Actualite';
import { RecupeNewsService } from 'src/app/service/recupe-news.service';
import { AddDialogComponent } from '../dialogues/add-dialog/add-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormulaireComponent } from 'src/app/shared/formulaire/formulaire.component';
import { User } from 'src/app/interfaces/User';
import { ListUsersService } from 'src/app/service/list-users.service';
import { RoleUser } from 'src/app/interfaces/rolesUser';

@Component({
  selector: 'app-liste-news',
  templateUrl: './liste-news.component.html',
  styleUrls: ['./liste-news.component.scss']
})
export class ListeNewsComponent implements OnInit {

  actualites: Actualite[];
  actualite: Actualite;
  currentRole: string;
  rolesInterface = RoleUser;

  private addDialog: MatDialogRef<AddDialogComponent>;
  dialogStatus = 'inactive';

  constructor(private actuService: RecupeNewsService, public dialog: MatDialog, private listUsersService: ListUsersService) { }

  ngOnInit() {
    this.actualite = {
      titre : '',
      contenuHTML : ''

    };

    this.actuService.getAllActualites().subscribe(
      (actus) => {
        this.actualites = actus;
      }
    );

    this.currentRole = this.listUsersService.giveCurrentRole();
  }

  add(actualite: Actualite) {
    this.actuService.ajouterActualite(actualite);
    this.hideDialog();
    /*this._http
      .post(`${BASE_URL}/api/peoples/`, person)
      .pipe(mergeMap(() => this._http.get(`${BASE_URL}/api/peoples/`)))
      .subscribe((people: any[]) => {
        this.people = people;
        this.hideDialog();
      });*/
  }

  showDialog(actual: Actualite) {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AddDialogComponent, {
      width: '600px',
      data: {isUpdateMode: false, actu: actual}
    });

    this.addDialog.afterClosed().subscribe(actualite => {
      this.dialogStatus = 'inactive';
      if (actualite) {
        this.add(actualite);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    this.addDialog.close();
  }

}
