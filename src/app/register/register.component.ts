import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
      validator: this.confirmPasswordValidator
    });
  }

  confirmPasswordValidator( group: FormGroup ) {
    const password = group.controls['password'];
    const confirmPassword = group.controls['conf_password'];
    if (password.value !== confirmPassword.value) {
      let errors = {};
      if ( confirmPassword.value === '' ) {
        errors = {
          'required' : true,
          'password_match': true
        };
      } else {
        errors = {
          'password_match': true
        };
      }
      return confirmPassword.setErrors(errors);
    }
    return null;
  }

  register() {
    console.log( this.registerForm.get('conf_password').errors );
  }
}
