import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ConfirmPasswordValidator } from '../shared/confirm-password-validator';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-pi-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor ( formbuilder: FormBuilder, private userService: UserService ) {
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
    .subscribe( response =>
      console.log( response )
    );
  }
}
