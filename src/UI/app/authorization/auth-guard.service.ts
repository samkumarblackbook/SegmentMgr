/**
 * Created by kumarpadmanabansa01 on 11/15/16.
 */

import { Injectable }     from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url : string = state.url;
        console.log('Trying to Log In...');
        var status = this.checkLogin(url);
        console.log('Login Status for: '+url+', '+status);
        return status;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: String): boolean {
        if (this.authService.isLoggedIn) {
            return true;
        }

        // store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate(['/login'])
        return false;
    }

}
