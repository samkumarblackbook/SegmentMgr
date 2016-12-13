import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MainComponent} from './main.component';
import {LoginComponent} from './login/login.component';
import {SegmentListComponent } from './segments/segment-list.component';
import {VehicleDetailComponent} from './vehicles/vehicle-detail.component';

import { AuthGuard } from './authorization/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'segments',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: SegmentListComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'vehicle',
                component: VehicleDetailComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor() {

    }
}

export const routingComponents = [MainComponent, AppComponent, LoginComponent, SegmentListComponent, VehicleDetailComponent];
