import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { FormsOneComponent } from './forms-one/forms-one.component';
import { CustomValidatorDirective } from './custom-validator.directive';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path:'', component: FormsComponent
  }
]

@NgModule({
  declarations: [
    FormsComponent,
    FormsOneComponent,
    CustomValidatorDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FormsComponent,
    FormsOneComponent,
    CustomValidatorDirective
  ]
})
export class FormsTaskModule { }
