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
  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.apiUrl}books`);
  }
}
