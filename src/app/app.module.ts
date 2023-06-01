import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouteOneComponent } from './routing/route-one/route-one.component';
import { RouteContactComponent } from './routing/route-contact/route-contact.component';
import { routeConfig } from './app.routes';
import { FriendsComponent } from './routing/friends/friends.component';
import { FriendInfoComponent } from './routing/friend-info/friend-info.component';
import { AppLevelService } from './applevel.service';
import { LoggingService } from './routing/logging.service';
import { RouteGuardService } from './guards/route-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './routing/error/error.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { DragGPTComponent } from './drag-drop/draggpt.component';
import { InfiniteScrollComponent } from './drag-drop/infinite.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    RouteOneComponent,
    RouteContactComponent,
    FriendsComponent,
    FriendInfoComponent,
    ErrorComponent,
    DragDropComponent,
    DragGPTComponent,
    InfiniteScrollComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    routeConfig,
    HttpClientModule,
    SharedModule,
    DragDropModule,
    ScrollingModule,
    VirtualScrollerModule,
    InfiniteScrollModule
  ],
  providers: [
    AppLevelService, 
    LoggingService, 
    RouteGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
