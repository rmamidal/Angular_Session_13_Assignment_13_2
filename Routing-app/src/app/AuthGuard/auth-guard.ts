import { Component, Injectable } from "@angular/core"
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router"

@Injectable()
export class AuthGuardComponent implements CanActivate {
    constructor(private _router: Router) {}
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(sessionStorage.getItem('authenticated') == "true"){
            return true;
        }

    return false;

    }
}