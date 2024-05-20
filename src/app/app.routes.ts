import { Routes } from '@angular/router';
import { BooksAllComponent } from './books-all/books-all.component';
import { BooksDetailsComponent } from "./books-details/books-details.component";
import { AuthorsAllComponent } from "./authors-all/authors-all.component";
import { AuthorsDetailsComponent } from "./authors-details/authors-details.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import {BooksEditComponent} from "./books-edit/books-edit.component";
export const routes: Routes = [
    {path: 'books', component: BooksAllComponent},
    {path:'book/:id', component: BooksDetailsComponent},
    {path:'books/edit/:id', component: BooksEditComponent},
    {path: 'authors', component:AuthorsAllComponent},
    {path: 'author/:id', component:AuthorsDetailsComponent},
    {path: 'signup', component:RegisterFormComponent},
    {path:'signin', component: LoginFormComponent}
  ];
  
