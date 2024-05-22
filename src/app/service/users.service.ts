import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'https://expressapi-eetf.onrender.com/api/';
  //apiUrl = 'http://localhost:5000/api/';
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

  addFavoriteBook(bookId: any):Observable<any>{
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',

      })
    };
    const userId = localStorage.getItem("user_id");
    const id ={
      "userId": userId
    }
    return this.http
    .put<any>(`${this.apiUrl}users/add_favorite_book/${bookId}`, id, httpOptions);
  }

  removeFavoriteBook(bookId: any):Observable<any>{
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const userId = localStorage.getItem("user_id");
    const id ={
      "userId": userId
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      }
    ),
    body: id
    };
   
    return this.http
    .delete<any>(`${this.apiUrl}users/remove_favorite_book/${bookId}`, httpOptions);
  }

  getFavoriteBooks():Observable<any>{
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',

      })
    };
    const userId = localStorage.getItem("user_id");
    return this.http.get<any>(`${this.apiUrl}users/favorite_books/${userId}`, httpOptions);
  }
}
