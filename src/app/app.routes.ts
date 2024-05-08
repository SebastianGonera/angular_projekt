import { Routes } from '@angular/router';
import { BooksAllComponent } from './books-all/books-all.component';
import { BooksDetailsComponent } from "./books-details/books-details.component";
import { AuthorsAllComponent } from "./authors-all/authors-all.component";
import { AuthorsDetailsComponent } from "./authors-details/authors-details.component";
export const routes: Routes = [
    {path: 'books', component: BooksAllComponent},
    {path:'book/:id', component: BooksDetailsComponent},
    {path: 'authors', component:AuthorsAllComponent},
    {path: 'author/:id', component:AuthorsDetailsComponent},
  ];
  
