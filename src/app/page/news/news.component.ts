import { Component, OnInit, Input } from '@angular/core';
import { Actualite } from 'src/app/interfaces/Actualite';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input()
  actualite: Actualite;

  constructor() { }

  ngOnInit() {
    /*this.actualite = {
      titre : 'Actu1 Titre',
      contenuHTML: '<!DOCTYPE html><html><body>Cette page est une page toute simple</body</html>'
    };*/
  }

  delete(actualite) {

  }

}
