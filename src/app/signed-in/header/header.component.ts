import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( private router: Router) { }

  signout() {
    localStorage.removeItem( 'isPiconnectLoggedIn');
    this.router.navigate(['login']);
  }
}
