import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  user: User;

  constructor() {
    // this.user = null;
  }

  ngOnInit() {
  }

}
