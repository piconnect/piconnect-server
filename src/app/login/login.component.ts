import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-pi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor ( formbuilder: FormBuilder, private userService: UserService, private router: Router ) {
    this.loginForm = formbuilder.group({
      'email': [ '', [ Validators.required, Validators.email ]],
      'password': [ '', Validators.required ]
    });
  }

  login() {
    if ( this.loginForm.status === 'INVALID' ) {
      return;
    }
    const data = this.loginForm.value;
    this.userService.loginUser( data )
    .subscribe(
      response => {
        localStorage.setItem( 'isPiconnectLoggedIn', response.token );
        localStorage.setItem( 'name', response.name );
        localStorage.setItem( 'email', response.email );
        this.router.navigate(['dashboard']);
      },
      (err: HttpErrorResponse) => {
        const err_message = JSON.parse( err.error );
        if ( err_message.message === 'wrong_password' ) {
          const password = this.loginForm.controls['password'];
          password.setErrors({'wrong_password' : true});
        } else if ( err_message.message === 'not_found' ) {
          const email = this.loginForm.controls['email'];
          email.setErrors({'not_found' : true});
        }
      }
    );
  }
}
