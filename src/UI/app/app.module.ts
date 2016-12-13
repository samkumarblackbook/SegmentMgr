import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {AgGridModule} from 'ag-grid-ng2/main';
import {HttpModule}    from '@angular/http';
import {AppComponent} from './app.component';
import {AppRoutingModule, routingComponents} from './routes.module';
import {SegmentService} from './segments/segment.services';
import {AuthGuard} from './authorization/auth-guard.service';
import {AuthService} from './authorization/auth.service';
import {LoginComponent} from './login/login.component';
import {SegmentListComponent} from './segments/segment-list.component';
import {VehicleService} from './vehicles/vehicle.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AgGridModule.withNg2ComponentSupport(),
        AppRoutingModule
    ],
    declarations: [
        ...routingComponents,
        AppComponent,
        LoginComponent,
        SegmentListComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        SegmentService,
        VehicleService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    constructor() {
        console.debug('Main Module Built')
    }
}
