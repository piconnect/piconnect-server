import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-pi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor ( formbuilder: FormBuilder, private userService: UserService ) {
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
        console.log(response.token);
      },
      err => {
        if ( err.error.message === 'wrong_password' ) {
          const password = this.loginForm.controls['password'];
          password.setErrors({'wrong_password' : true});
        } else if ( err.error.message === 'not_found' ) {
          const email = this.loginForm.controls['email'];
          email.setErrors({'not_found' : true});
        }
      }
    );
  }
}
