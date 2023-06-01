import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createPasswordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value: string = control.value;

        if(!value){
            return null;
        }

        let hasUpperCase = /[A-Z]+/.test(value);
        let hasLowerCase = /[a-z]+/.test(value);
        let hasNumeric = /[0-9]+/.test(value);
        let count = value.length >=8 ;
        
        
        let passwordValidator = hasLowerCase && hasUpperCase && hasNumeric && count;

        return !passwordValidator ? { passwordStrength:true }:null;
    }
}