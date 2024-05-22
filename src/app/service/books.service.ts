import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Book {
  _id?: string,
  title: string,
  isbn: string,
  pages: number,
  categories: string,
  description: string,
  published: string,
  authors: string[]
}
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiUrl = 'https://expressapi-eetf.onrender.com/api/';
  //apiUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }
  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}books`);
  }
  getBook(id: any): Observable<any> {
    console.log(`API: ${this.apiUrl}books/${id}`);
    return this.http.get<any>(`${this.apiUrl}books/${id}`);
  }

  editBook(editedBook: any, bookId: any): Observable<any> {
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',

      })
    };
    return this.http.put<any>(`${this.apiUrl}books/update/${bookId}`, editedBook, httpOptions);
  }

  uploadCover(cover: File): Observable<any>{
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
      })
    };
    const formData = new FormData();
    formData.append('file', cover, cover.name);
    return this.http.post<any>(`${this.apiUrl}upload/`, formData, httpOptions);
  }
}
