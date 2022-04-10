import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstrants } from '../common/global-constrants';
import { Page } from '../model/Page';
import { User } from '../model/User';

/**
service to handle user requests
*/

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = GlobalConstrants.base_url + GlobalConstrants.users_endpoint;
  }

  /**
  get every user
  */
  public findAll(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  /**
  users using pagination
  @param: page Page
  */
  public findByPage(page: Page): Observable<any> {
    let params = new HttpParams()
      .set('page', page.pageNumber.toString())
      .set('limit', page.size.toString());
    return this.http.get<any>(this.url, {params: params});
  }

  /**
  find users based on username
  @param: username string
  */
  public findByUsername(username: string): Observable<any> {
    let params = new HttpParams()
      .set('username', username);
    return this.http.get<any>(this.url, {params: params});
  }

  /**
  * user creation
  * @param user User
  */
  public createUser(user: User): Observable<any> {
    return this.http.post<any>(this.url, {'user': user});
  }
}
