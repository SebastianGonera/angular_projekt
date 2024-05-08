import { Component } from '@angular/core';
import { BooksService } from "../service/books.service";
import { RouterModule, RouterOutlet } from '@angular/router';
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
  selector: 'app-books-all',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './books-all.component.html',
  styleUrl: './books-all.component.css'
})
export class BooksAllComponent {
  books: any[]|null = [];
  errorMessage:string = "";
  constructor(private data: BooksService){}
  ngOnInit(){
    this.data.getAllBooks().subscribe({
      next:(res)=>{
        let obj = Object.values(res);
        this.books = obj[0];
      },
      error:(err)=>{
        this.errorMessage=err;
      }
    });
  }
  
}
