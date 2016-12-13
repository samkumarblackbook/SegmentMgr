/**
 * Created by kumarpadmanabansa01 on 12/1/16.
 */

import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { GridOptions } from 'ag-grid/main';

import { ISegment } from '../interfaces';
import { SegmentService } from './segment.services';

@Component({
    selector: 'segments',
    template: require('./segment-list.view.pug')
})
export class SegmentListComponent implements AfterViewInit{

    public gridOptions:GridOptions;
    public rowData: Array<ISegment>;
    public routeInfo: ActivatedRouteSnapshot;

    constructor(
        public route: ActivatedRoute,
        private segmentService: SegmentService
    ) {
        this.routeInfo = this.route.snapshot;
        this.rowData = this.routeInfo['data']['segments'];
        this.gridOptions = <GridOptions>{
            headerHeight: 35,
            rowHeight: 30,
            enableServerSideSorting: true,
            rowModelType:'pagination',
            paginationPageSize: 35,
        };
        this.gridOptions.columnDefs = this.getColumnDefs();
    }

    ngAfterViewInit(){
        this.gridOptions.api.sizeColumnsToFit();
        this.createNewDataSource();
    }

    onResize(event){
        this.gridOptions.api.sizeColumnsToFit();
    }

    getColumnDefs(){
        return [
            {
                headerName: 'Name',
                field: 'name'
            },{
                headerName: 'Description',
                field: 'description'
            },{
                headerName: 'Market',
                field: 'market'
            },{
                headerName: 'Active',
                field: 'active',
                cellClass: ['center-text-cell'],
                cellRendererFramework: {
                    template: require('../grid/bool-cell.view.pug')
                }
            }
        ]
    }

    createNewDataSource(){

        this.segmentService.getAllSegments().then((res) => {
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
