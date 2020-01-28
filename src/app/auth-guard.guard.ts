import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListUsersService } from 'src/app/service/list-users.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private userService: ListUsersService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      /*const isSignedIn = this.userService.isLoggedIn();

      if (isSignedIn !== true) {
          this.router.navigate(['/accueil']);
      }
      return isSignedIn;*/

      if (this.userService.isAuthentificated()) {
        console.log('login');
        return true;
      }
      this.router.parseUrl('/login');
      return false;
  }
}
