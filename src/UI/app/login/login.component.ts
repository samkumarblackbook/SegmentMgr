import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../authorization/auth.service';

@Component({
    selector: 'login',
    template: require('./login.view.pug')
})
export class LoginComponent {
    user: {password: string,username: string}
    errorMsg: string = '';
    @Output() loginChange = new EventEmitter<String>();
    @Input() statusFlag: boolean = true;

    constructor(private router: Router, private authService: AuthService) {
        this.user = {password: '', username: ''}
    }

    login() {
        this.authService.login();
        this.loginChange.emit('Logout');
        this.router.navigate(['/segments']);
    }

    logout() {
        this.router.navigate(['/login']);
        this.loginChange.emit('Login');
    }

}
