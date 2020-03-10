import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // email: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthentificationService,
              private router: Router) { }

  logout() {
    this.authService.signOutUser();
    this.router.navigate(['login']);
  }

  ngOnInit() {
    // this.isAuth = this.authService.estConnecte();
   /* this.authService.afas.user.subscribe(
      (user) => {
        this.email = user.email;
      }
    );*/
    // console.log('Connecté ou pas ? -> ' + this.isAuth);*/
  }

}
