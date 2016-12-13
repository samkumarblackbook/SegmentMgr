/**
 * Created by kumarpadmanabansa01 on 12/2/16.
 */

import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {IVehicle} from '../interfaces';
import {Vehicle} from "../interfaces/IVehicle";
import {VehicleService} from './vehicle.service';
import {GridOptions} from 'ag-grid/main';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {Response} from '@angular/http';


@Component({
    selector: 'vehicle-detail',
    template: require('./vehicle-detail.view.pug')
})
export class VehicleDetailComponent {
    public vehicleForm: FormGroup;
    public vehicle: IVehicle = new Vehicle();
    public vehicleData: Array<IVehicle> = [];
    public isNewVehicle: boolean = true;
    public isReadOnly: boolean = false;
    public gridOptions: GridOptions;
    public rowData: Array<IVehicle>;
    public routeInfo: ActivatedRouteSnapshot;
    public id: number = 0;

    constructor(private formBuilder: FormBuilder,
                private vehicleService: VehicleService,
                public route: ActivatedRoute
    ) {
        this.vehicleForm = this.formBuilder.group({
                'name': ['', Validators.required],
                'make': ['', Validators.required],
                'model': ['', Validators.required],
                'year': ['2016', Validators.required],
                'description': [''],
                'vin': ['']
            },
        );

        this.routeInfo = this.route.snapshot;
        this.gridOptions = <GridOptions>{
            headerHeight: 35,
            rowHeight: 35,
            enableServerSideSorting: true,
            rowModelType: 'pagination',
            paginationPageSize: 25,
        };
        this.gridOptions.columnDefs = this.getColumnDefs();
    }

    editVehicle = () => {
        this.isReadOnly = false;
        this.vehicleForm.enable();
    }

    resetForm = () => {
        this.vehicle = new Vehicle();
        this.vehicle.year = 2016;
        this.vehicleForm.reset();
    }

    saveForm = () => {
        if (this.vehicleForm.valid) {
            var newVehicle = this.vehicleForm.value;
            this.vehicleService.addVehicle(newVehicle)
                .then((response: Response) => {
                    var newVehicleId = response.json().id;
                    this.getAllVehicles();
                    this.resetForm();
                }).catch((response: Response) => {
                console.log(response.json());
            })
        }
    }

    goBack = () => {
        if (!this.isNewVehicle) {
            this.isReadOnly = true;
            this.vehicleForm.disable();
        }
    }

    ngAfterViewInit() {
        this.gridOptions.api.sizeColumnsToFit();
        this.getAllVehicles();
    }

    onResize(event) {
        this.gridOptions.api.sizeColumnsToFit();
    }

    getColumnDefs() {
        return [
            {
                headerName: 'Name',
                field: 'name'
            }, {
                headerName: 'Description',
                field: 'description'
            }, {
                headerName: 'Make',
                field: 'make'
            }, {
                headerName: 'Model',
                field: 'model'
            }, {
                headerName: 'Year',
                field: 'year'
            }, {
                headerName: 'VIN',
                field: 'vin'
            }
        ]
    }

    getAllVehicles() {

        this.vehicleService.getAllVehicles().then((res) => {
            this.rowData = res.json();
            console.log(this.rowData);
            var dataSource = {
                getRows: (params) => {
                    var pageData = this.rowData.slice(params.startRow, params.endRow)
                    params.successCallback(pageData, this.rowData.length);
                }
            }
            this.gridOptions.api.setDatasource(dataSource);
        })

    }

}