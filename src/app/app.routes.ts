import { RouterModule, Routes } from "@angular/router";
import { RouteContactComponent } from "./routing/route-contact/route-contact.component";
import { FriendsComponent } from "./routing/friends/friends.component";
import { FriendInfoComponent } from "./routing/friend-info/friend-info.component";
import { RouteGuardService } from "./guards/route-guard.service";
import { ErrorComponent } from "./routing/error/error.component";
import { DragDropComponent } from "./drag-drop/drag-drop.component";
import { DragGPTComponent } from "./drag-drop/draggpt.component";
import { InfiniteScrollComponent } from "./drag-drop/infinite.component";

const routes: Routes = [
    { path:'', component: RouteContactComponent },
    { path:'home', component: RouteContactComponent },
    { 
        path:'pipes',
        loadChildren: ()=> import('./pipes/pipes.module').then(m => m.PipesModule)
    },
    { 
        path:'ParentChild',
        loadChildren: ()=> import('./parent and child/parent-child.module').then(m => m.ParentChildModule)
    },
    {
        path:'formsTask',
        loadChildren: ()=> import('./forms/forms-task.module').then(m=> m.FormsTaskModule)
    },
    {
        path:'services',
        loadChildren: ()=> import('./services/services.module').then(m=> m.ServicesModule)
    },
    {
        path:'observables',
        loadChildren: ()=> import('./observables/observe-promise.module').then(m=> m.ObservePromiseModule)
    },
    {
        path:'lifecyclehooks',
        loadChildren: ()=> import('./life-cycle-hooks/life-cycle-hooks.module').then(m => m.LifeCycleHooksModule)
    },
    {
        path:'primeng',
        loadChildren: ()=> import('../../projects/prime-ng/src/app/app.module').then(m => m.AppModule)
    },
    {
        path:'friends',
        component: FriendsComponent,
        // canActivate: [RouteGuardService],
        canActivateChild: [RouteGuardService],
        children: [
            { path:'friendInfo/:friendName', component: FriendInfoComponent, canDeactivate: [RouteGuardService] },
        ]
    },
    {
        path:'droplist',
        component: DragDropComponent
    },
    { 
        path: 'settings', 
        canLoad: [RouteGuardService],
        canActivate: [RouteGuardService],
        loadChildren: () => import('./lazyload/lazyload.module').then(m => m.LazyloadModule) 
    },
    {
        path:'gptdrag',
        component: DragGPTComponent
    },
    {
        path:'infinite',
        component: InfiniteScrollComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

let routeConfig = RouterModule.forRoot(routes);
export { routeConfig };