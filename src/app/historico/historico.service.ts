import { AppConstants } from '../login/app.constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HistoricoService {

  getHistorico(): Observable<Array<any>> {
    let headers = new Headers({ 'X-Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWd1aXJlbGxpIiwic2NvcGVzIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNTQxMDA5ODUzLCJleHAiOjYxNTQxMDA5ODUzfQ.wB-sZBQROh11wKYjzzJlSf8vlxPCOUONALWDv_siqW1dRJiWD6YLAdz-VRJP2g4e1F2OAfW_nQesLgO0uqK_7g ' });
    return this.http.get(AppConstants.API_ROOT + '/historico/procedimentos', {
      headers: headers
    })
    .map(response => response.json());
  }


  constructor(private http: Http) { }
}