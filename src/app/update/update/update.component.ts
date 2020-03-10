import { mergeMap, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  user: any;

  /**
   * Component constructor
   */
  constructor(private route: ActivatedRoute, private router: Router) {
    this.user = {
      address: {}
    };
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    /*this.route.params
      .pipe(
        map((params: any) => params.email),
        mergeMap((email: string) => this._http.get(`${BASE_URL}/api/peoples/${id}`))
      )
      .subscribe((user: any) => (this.user = user));*/
  }

  submit(user: any) {
    // this._http.put(`${BASE_URL}/api/peoples/${person.id}`, person).subscribe(() => this._router.navigate(['/people']));
  }

  cancel() {
    this.router.navigate(['/utilisateurs']);
  }
}
