import { ActivatedRouteSnapshot, CanDeactivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoggingService } from "../routing/logging.service";
import { Injectable } from "@angular/core";

export interface IDeactivateGuard {
    CanExit(): boolean;
}

@Injectable()
export class RouteGuardService implements CanDeactivate<IDeactivateGuard> {
    constructor(private logsvc: LoggingService, private router:Router) {}
    canDeactivate(component: IDeactivateGuard, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.CanExit();
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree > {
        // let isLoggedIn = this.logsvc.getLogDetails()
        // if(isLoggedIn){
        //     return true;
        // }
        // else{
            // this.router.navigate(['home'])
        // }
        // return false;

        return this.logsvc.getLogDetails().then((data) => {
            return (data) ? true : false;
        });
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(route,state);
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.logsvc.getLogDetails().then((data) => {
            return (data) ? true : false;
        });
    }

}