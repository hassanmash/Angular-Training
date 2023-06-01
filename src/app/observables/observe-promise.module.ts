import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { ObservablesOneComponent } from './observables-one/observables-one.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp21Component } from './comp21/comp21.component';
import { Comp22Component } from './comp22/comp22.component';
import { ObservePromiseComponent } from './observe-promise/observe-promise.component';
import { SharedModule } from '../shared/shared.module';
import { SubjectServices } from './subject.service';
import { SubjectBehaviourService } from './subjectBehaviour.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', component: ObservePromiseComponent
  }
]

@NgModule({
  declarations: [
    ObservablesOneComponent,
    Comp1Component,
    Comp2Component,
    Comp21Component,
    Comp22Component,
    ObservePromiseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SubjectServices,
    SubjectBehaviourService
  ],
  exports: [
    ObservablesOneComponent,
    Comp1Component,
    Comp2Component,
    Comp21Component,
    Comp22Component,
    ObservePromiseComponent
  ]
})
export class ObservePromiseModule { }
