import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ConfirmPasswordValidator } from '../shared/confirm-password-validator';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-pi-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgetPasswordForm: FormGroup;

  constructor ( formbuilder: FormBuilder, private userService: UserService ) {
    this.forgetPasswordForm = formbuilder.group({
      'email': [ '', [ Validators.required, Validators.email ]]
    });
  }

  forget_password() {
    if ( this.forgetPasswordForm.status === 'INVALID' ) {
      return;
    }
    const data = this.forgetPasswordForm.value;
    this.userService.forgetPassword( data );
  }
}
