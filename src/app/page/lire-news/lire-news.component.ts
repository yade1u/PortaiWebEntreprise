import { Component, OnInit, Input } from '@angular/core';
import { Actualite } from 'src/app/interfaces/Actualite';

@Component({
  selector: 'app-lire-news',
  templateUrl: './lire-news.component.html',
  styleUrls: ['./lire-news.component.scss']
})
export class LireNewsComponent implements OnInit {

  actualite: Actualite;

  constructor() { }

  ngOnInit() {
  }

}
