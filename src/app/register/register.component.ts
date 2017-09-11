import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { ConfirmPasswordValidator } from '../shared/confirm-password-validator';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-pi-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor ( formbuilder: FormBuilder, private userService: UserService, private router: Router ) {
    this.registerForm = formbuilder.group({
      'name': [ '', Validators.required ],
      'email': [ '', [ Validators.required, Validators.email ]],
      'password': [ '', Validators.required ],
      'conf_password': [ '', [ Validators.required ] ],
    },
    {
      validator: ConfirmPasswordValidator.validator( 'password', 'conf_password' )
    });
  }

  register() {
    if ( this.registerForm.status === 'INVALID' ) {
      return;
    }
    const data = this.registerForm.value;
    this.userService.registerUser( data )
    .subscribe(
      response => {
        localStorage.setItem( 'isPiconnectLoggedIn', response.token );
        this.router.navigate(['dashboard']);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          const email = this.registerForm.controls['email'];
          email.setErrors({'already_registred' : true});
        }
      }
    );
  }
}
