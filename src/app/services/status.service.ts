import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstrants } from '../common/global-constrants';

/**
 * service responsible to handle status
 */
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = GlobalConstrants.base_url + GlobalConstrants.statuses_endpoint;
  }

  /**
   * find all status
   */
  public findAll(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
