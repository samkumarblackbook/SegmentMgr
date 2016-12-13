/**
 * Created by kumarpadmanabansa01 on 11/16/16.
 */

import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

    isLoggedIn: boolean = false;

    // Store the URL to redirect after loggin in
    redirectUrl: String;

    // login(): Observable<boolean> {
    //     return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    // }

    login() : boolean {
        this.isLoggedIn = true;
        return this.isLoggedIn;
    }


    logout(): void {
        this.isLoggedIn = false;
    }

}


