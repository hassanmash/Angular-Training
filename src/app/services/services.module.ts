import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesTasksComponent } from './services-tasks/services-tasks.component';
import { ServiceTasks2Component } from './service-tasks2/service-tasks2.component';
import { ServiceTasks3Component } from './service-tasks3/service-tasks3.component';
import { ServicesComponent } from './services/services.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path:'', component: ServicesComponent
  }
]

@NgModule({
  declarations: [
    ServicesTasksComponent,
    ServiceTasks2Component,
    ServiceTasks3Component,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(route)
  ],
  exports: [
    ServicesTasksComponent,
    ServiceTasks2Component,
    ServiceTasks3Component,
    ServicesComponent
  ]
})
export class ServicesModule { }
