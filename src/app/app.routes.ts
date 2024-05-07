import { Routes } from '@angular/router';
import { BooksAllComponent } from './books-all/books-all.component';
import { BooksDetailsComponent } from "./books-details/books-details.component";
export const routes: Routes = [
    {path: 'books', component: BooksAllComponent},
    {path:'book/:id', component: BooksDetailsComponent},
  ];
  
