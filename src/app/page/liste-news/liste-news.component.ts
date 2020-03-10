import { Component, OnInit } from '@angular/core';
import { Actualite } from 'src/app/interfaces/Actualite';
import { RecupeNewsService } from 'src/app/service/recupe-news.service';
import { AddDialogComponent } from '../dialogues/add-dialog/add-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-liste-news',
  templateUrl: './liste-news.component.html',
  styleUrls: ['./liste-news.component.scss']
})
export class ListeNewsComponent implements OnInit {

  actualites: Actualite[];

  private addDialog: MatDialogRef<AddDialogComponent>;
  dialogStatus = 'inactive';

  constructor(private actuService: RecupeNewsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.actuService.getAllActualites().subscribe(
      (actus) => {
        this.actualites = actus;
        console.log(this.actualites);
      }
    );
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

  showDialog() {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AddDialogComponent, {
      width: '600px',
      data: {}
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
