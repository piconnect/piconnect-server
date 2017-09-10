import { FormGroup } from '@angular/forms';

export class ConfirmPasswordValidator {
  static validator( passwordKey, confirmPasswordKey ) {
    return (group: FormGroup) => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];
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
    };
  }
}
