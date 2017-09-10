import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ConfirmPasswordValidator } from '../shared/confirm-password-validator';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-pi-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  resetPasswordForm: FormGroup;

  constructor ( formbuilder: FormBuilder, private userService: UserService ) {
    this.resetPasswordForm = formbuilder.group({
      'password': [ '', Validators.required ],
      'conf_password': [ '', [ Validators.required ] ]
    },
    {
      validator: ConfirmPasswordValidator.validator( 'password', 'conf_password' )
    });
  }

  reset_password() {
    if ( this.resetPasswordForm.status === 'INVALID' ) {
      return;
    }
    const data = this.resetPasswordForm.value;
    this.userService.resetPassword( data );
  }

}
