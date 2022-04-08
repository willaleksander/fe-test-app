import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstrants } from '../common/global-constrants';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private url: string;

    constructor(private http: HttpClient) { 
      this.url = GlobalConstrants.base_url + '/' + GlobalConstrants.statuses_endpoint;
    }

    public findAll(): Observable<any> {
      return this.http.get<any>(this.url);
    }
}
