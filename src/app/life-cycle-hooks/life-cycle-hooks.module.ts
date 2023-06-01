import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'', component: LifeCycleComponent
  }
]

@NgModule({
  declarations: [
    LifeCycleComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    LifeCycleComponent,
    ParentComponent,
    ChildComponent
  ]
})
export class LifeCycleHooksModule { }
