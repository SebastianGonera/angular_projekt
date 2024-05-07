import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BooksService} from './service/books.service';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  books: Book[] = [];
  errorMessage:string = "";
  constructor(private data: BooksService){}
  ngOnInit(){
    this.data.getAllBooks().subscribe({
      next:(books)=>{
        this.books = books;
        console.log(books[0]);
        console.log(Array.isArray(this.books));
      },
      error:(err)=>{
        this.errorMessage=err;
      }
    });
  }
}
