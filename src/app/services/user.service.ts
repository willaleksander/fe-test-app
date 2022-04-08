import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstrants } from '../common/global-constrants';
import { Page } from '../model/Page';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = GlobalConstrants.base_url + '/' + GlobalConstrants.users_endpoint;
  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  public findByPage(page: Page): Observable<any> {
    let params = new HttpParams()
      .set('page', page.pageNumber.toString())
      .set('limit', page.size.toString());
    return this.http.get<any>(this.url, {params: params});
  }
}
