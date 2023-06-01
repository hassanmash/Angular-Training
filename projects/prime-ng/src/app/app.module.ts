import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNGModule } from '../PrimeNG/primeng.module';
import { FormsModule } from '@angular/forms';
import { BookDataComponent } from './book-data/book-data.component';
import { HttpClientModule } from '@angular/common/http';
import { TextBoxComponent } from './text-box/text-box.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { 
    path: '', 
    component: AppComponent,
    children: [
      { path:'dropdown', component: HelloworldComponent },
      { path:'books', component: BookDataComponent },
      { path:'textbox', component: TextBoxComponent },
      { path:'pagination', component: PaginationComponent },
      { path:'picklist', component: PickListComponent },
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    BookDataComponent,
    PaginationComponent,
    PickListComponent,
    TextBoxComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    PrimeNGModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AppComponent
  ]
})
export class AppModule { }
