import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import lazyloadRoutes from './lazyload.routes';



@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule,
    lazyloadRoutes
  ],
  exports: [
    SampleComponent
  ]
})
export class LazyloadModule { }
