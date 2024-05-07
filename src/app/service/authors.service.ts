import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  apiUrl = 'https://expressapi-eetf.onrender.com/api/';
  constructor(private http: HttpClient) { }
  getAllAuthors(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}authors`);
  }
  getAuthor(id:any): Observable<any>{
    console.log(`API: ${this.apiUrl}authors/${id}`);
    return this.http.get<any>(`${this.apiUrl}authors/${id}`);
  }
}
