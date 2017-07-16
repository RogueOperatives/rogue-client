import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class RestServiceBase {

    constructor(protected _http: Http) {
    }

    protected getRequestOptions() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Accept', 'text/plain');
        headers.append('Accept', '*/*');
        headers.append('Content-Type', 'application/json;charset=UTF-8');

        return { headers: headers };
    }

    protected buildUrl(appendix: string): string {
        return `http://localhost:5000/api/${appendix}`;
    }
}
