import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(

        private _loginService: LoginService,
        private router: Router
    ) { }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ){
        
        if( this._loginService.isAuthenticated() ){

            return true;

        } else {

            this.router.navigate([ 'login' ]);
            return false;
        }
    }
}