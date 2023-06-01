import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from '../card/card.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

const route: Routes = [
  { path: '' , component: ParentChildComponent }
];

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    ParentChildComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(route)
  ],
  exports: [
    ParentComponent,
    ChildComponent,
    ParentChildComponent
  ]
})
export class ParentChildModule { }
