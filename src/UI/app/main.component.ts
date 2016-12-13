import {Component, Input} from '@angular/core';
import {LoginComponent} from './login/login.component';

@Component({
    selector: 'main-container',
    template: require('./main.view.pug')
})
export class MainComponent {

    public displayLogin: boolean = true;

    public loginMenuText: string = 'Login';

    constructor() {

    }

    resetLoginMenuText($event) {
        console.log($event);
        this.loginMenuText = $event;
    }

    setName() {
        console.log('set name called');
    }

}

