/**
 * Created by kumarpadmanabansa01 on 12/5/16.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ISegment } from '../interfaces';
import { SEGMENTS } from '../interfaces/mock-segments';


@Injectable()
export class SegmentService {

    private baseUrl: string = 'http://localhost:8000/';

    constructor(private http: Http) {

    }

    getAllSegments = (): Promise<Response> => {
        let response = this.http.get(this.baseUrl + 'api/segments').toPromise();
        return response;
    }

    // getSegment(id: number): Promise<ISegment> {
    //     return this.getSegments()
    //         .subscribe(segments => segments.find(segment => segment.id === id));
    // }
}
