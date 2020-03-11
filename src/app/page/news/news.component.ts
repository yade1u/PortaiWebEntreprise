import { Component, OnInit, Input } from '@angular/core';
import { Actualite } from 'src/app/interfaces/Actualite';
import { AddDialogComponent } from '../dialogues/add-dialog/add-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormulaireComponent } from 'src/app/shared/formulaire/formulaire.component';
import { RoleUser } from '../../interfaces/rolesUser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input()
  actualite: Actualite;
  @Input() currentRole: string;
  rolesInterface = RoleUser;

  private addDialog: MatDialogRef<AddDialogComponent>;
  dialogStatus = 'inactive';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    /*this.actualite = {
      titre : 'Actu1 Titre',
      contenuHTML: '<!DOCTYPE html><html><body>Cette page est une page toute simple</body</html>'
    };*/
  }

  afficher(actualite) {

  }

  modif(actualite: Actualite) {
    // this.actuService.ajouterActualite(actualite);
    this.hideDialog();
    /*this._http
      .post(`${BASE_URL}/api/peoples/`, person)
      .pipe(mergeMap(() => this._http.get(`${BASE_URL}/api/peoples/`)))
      .subscribe((people: any[]) => {
        this.people = people;
        this.hideDialog();
      });*/
  }

  showDialog(actualite: Actualite) {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AddDialogComponent, {
      width: '600px',
      data: {isUpdateMode: 1, actu: actualite}
    });

    this.addDialog.afterClosed().subscribe(actualite1 => {
      this.dialogStatus = 'inactive';
      if (actualite1) {
        this.modif(actualite1);
      }
    });
  }

  showDialog1(actualite: Actualite) {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AddDialogComponent, {
      width: '600px',
      data: {isUpdateMode: 3, actu: actualite}
    });

    this.addDialog.afterClosed().subscribe(actualite1 => {
      this.dialogStatus = 'inactive';
      if (actualite1) {
        this.modif(actualite1);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    this.addDialog.close();
  }


}
