import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'https://expressapi-eetf.onrender.com/api/';
  constructor(private http: HttpClient) { }
  registerUser(user: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>(`${this.apiUrl}users/signup`, user, httpOptions);
  }
  loginUser(user: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>(`${this.apiUrl}users/signin`, user, httpOptions);
  }
}
