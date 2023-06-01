import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../custom-validator';

@Component({
  selector: 'app-forms-one',
  templateUrl: './forms-one.component.html',
  styleUrls: ['./forms-one.component.css']
})
export class FormsOneComponent {

  public rLoginForm = new FormGroup({
    user: new FormControl(null,{
      validators: [Validators.required, Validators.email],
      asyncValidators: []
    }),
    password: new FormControl(null,{
      validators: [Validators.required,Validators.minLength(8),createPasswordStrengthValidator()]
    }),
  })

  public rLoginSubmit(){
    console.log(this.rLoginForm.value);    
  }

  get user(){
    return this.rLoginForm.get('user');
  }

  get password(){
    return this.rLoginForm.get('password');
  }

  public loginUser(item: any){
    console.log(item);
  }
}
