import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pi-signed-in',
  templateUrl: './signed-in.component.html',
  styleUrls: ['./signed-in.component.scss']
})
export class SignedInComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    if (this.router.url === '/') {
        this.router.navigate(['/dashboard']);
    }
  }

}
