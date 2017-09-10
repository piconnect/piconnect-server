import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ConfirmPasswordValidator } from '../shared/confirm-password-validator';

@Component({
  selector: 'app-pi-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor ( formbuilder: FormBuilder ) {
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
    console.log( this.registerForm.get('conf_password').errors );
  }
}
