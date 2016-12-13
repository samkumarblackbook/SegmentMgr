/**
 * Created by kumarpadmanabansa01 on 12/5/16.
 */

import { Injectable } from '@angular/core';

import { IVehicle } from '../interfaces';
import { VEHICLES } from '../interfaces/mock-vehicles';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class VehicleService {

    private baseUrl: string = 'http://localhost:8000/';

    constructor(private http: Http) {

    }

    getAllVehicles = (): Promise<Response> => {
        let response = this.http.get(this.baseUrl + 'api/vehicles').toPromise();
        return response;
    }

    // getVehicle(id: number): Promise<IVehicle> {
    //     return this.getVehicles()
    //         .then(vehicles => vehicles.find(vehicle => vehicle.id === id));
    // }

    addVehicle(vehicle: IVehicle): Promise<Response> {
        let response = this.http.post(this.baseUrl + 'api/vehicle', vehicle).toPromise();
        return response;
    }

}
