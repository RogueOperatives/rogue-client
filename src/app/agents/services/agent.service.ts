import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { RestServiceBase } from "../../common/rest-service-base.service";

import { Agent } from '../models/agent'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AgentService extends RestServiceBase {
  constructor(http: Http) { 
      super(http);
  }

  public getAll(): Promise<Agent[]> {
      return this.http
              .get(this.buildUrl('units'))
              .toPromise()
              .then(response => response.json().data as Agent[])
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
