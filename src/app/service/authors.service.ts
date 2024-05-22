import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  editAuthor(editedAuthor: any, authorId: any): Observable<any>{
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',

      })
    };
    return this.http
    .put<any>(`${this.apiUrl}authors/update/${authorId}`, editedAuthor, httpOptions);
  }
}

