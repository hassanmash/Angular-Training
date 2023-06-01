import { AbstractControl } from "@angular/forms"
import { createPasswordStrengthValidator } from "./custom-validator"

describe("Custom Validator",()=>{

    it("Should Pass when valid password is entered", ()=>{
        let control = { value: 'Abcd1234'};

        let actualvalue = createPasswordStrengthValidator()(control as AbstractControl)

        expect(actualvalue).toBeNull();
    });

    it("Should Fail when invalid password is entered", ()=>{
        let control = { value: 'abcd1234'}

        let actualvalue = createPasswordStrengthValidator()(control as AbstractControl)

        expect(actualvalue).not.toBeNull();
    });

    it("Should Fail when valid password but less than 8 character is entered", ()=>{
        let control = { value: 'Abc124'}

        let actualvalue = createPasswordStrengthValidator()(control as AbstractControl)

        expect(actualvalue).not.toBeNull();
    });

    it("Should Fail when invalid password but more than 8 character is entered", ()=>{
        let control = { value: 'abcde12345'}

        let actualvalue = createPasswordStrengthValidator()(control as AbstractControl)

        expect(actualvalue).not.toBeNull();
    });
    
})