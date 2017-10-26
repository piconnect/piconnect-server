import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class SignedOutGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('isPiconnectLoggedIn')) {
      const expStamp = JSON.parse(atob(localStorage.getItem('isPiconnectLoggedIn').split('.')[1])).exp;
      const currStamp = Math.floor( new Date().getTime() / 1000 );
      if ( currStamp > expStamp ) {
        localStorage.removeItem( 'isPiconnectLoggedIn' );
        return true;
      } else {
        this.router.navigate(['dashboard']);
        return false;
      }
    }

    return true;
  }
}
