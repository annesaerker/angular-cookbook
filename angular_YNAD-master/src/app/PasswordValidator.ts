import {FormControl} from "@angular/forms";

export class PasswordValidator {

  static getPasswordValidator() {
    return function passwordValidator(control: FormControl): { [s: string]: boolean } {

      // If password matches the values, then login
      if (!control.value.match(/^123/ ||/^asd/  )) {
        return {invalidPassword: true};
      }
      return null;
    }
  }
}