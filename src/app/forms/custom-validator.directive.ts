import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { createPasswordStrengthValidator } from './custom-validator';

@Directive({
  selector: '[appCustomValidator]'
})
export class CustomValidatorDirective implements Validator{
  validate(control: AbstractControl): ValidationErrors | null {
    return createPasswordStrengthValidator()(control)
  }
}
