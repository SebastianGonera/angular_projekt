import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Book{
  _id?:string,
  title: string,
  isbn : string,
  pages: number,
  categories: string ,
  description: string,
  published: string,
  authors: string[]
}
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiUrl = 'https://expressapi-eetf.onrender.com/api/';
  constructor(private http: HttpClient) { }
  getAllBooks(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}books`);
  }
  getBook(id:any): Observable<any>{
    console.log(`API: ${this.apiUrl}books/${id}`);
    return this.http.get<any>(`${this.apiUrl}books/${id}`);
  }
}
