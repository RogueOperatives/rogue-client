import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RestServiceBase } from "./restServiceBase";

import { Agent } from '../models/agent'

@Injectable()
export class AgentService extends RestServiceBase {
    constructor(_http: Http) { 
        super(_http);
    }

    public getAll(): Observable<Agent[]> {
        return this._http
                .get(this.buildUrl('units'))
                .map(response => (<Agent[]>response.json()));
    }
}
