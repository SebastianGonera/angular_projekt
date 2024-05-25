import { Routes } from '@angular/router';
import { BooksAllComponent } from './books-all/books-all.component';
import { BooksDetailsComponent } from "./books-details/books-details.component";
import { AuthorsAllComponent } from "./authors-all/authors-all.component";
import { AuthorsDetailsComponent } from "./authors-details/authors-details.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { BooksEditComponent } from "./books-edit/books-edit.component";
import { AuthorsEditComponent } from "./authors-edit/authors-edit.component";
import { AuthorsAddComponent } from "./authors-add/authors-add.component";
import { HomeComponent } from "./home/home.component";
import { UserFavAuthorsComponent } from "./user-fav-authors/user-fav-authors.component";
import { UserFavBooksComponent } from "./user-fav-books/user-fav-books.component";
import { BooksAddComponent } from "./books-add/books-add.component";
import { UserPasswordComponent } from "./user-password/user-password.component";
import { UserEditComponent } from "./user-edit/user-edit.component";

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'books', component: BooksAllComponent},
    {path:'book/:id', component: BooksDetailsComponent},
    {path:'books/edit/:id', component: BooksEditComponent},
    {path:'books/add', component:BooksAddComponent},
    {path: 'authors', component:AuthorsAllComponent},
    {path: 'author/:id', component:AuthorsDetailsComponent},
    {path: 'authors/edit/:id', component:AuthorsEditComponent},
    {path: 'authors/add', component: AuthorsAddComponent},
    {path: 'signup', component:RegisterFormComponent},
    {path:'signin', component: LoginFormComponent},
    {path: 'fav_authors', component: UserFavAuthorsComponent},
    {path: 'fav_books', component: UserFavBooksComponent},
    {path: 'change_password', component: UserPasswordComponent},
    {path: 'user/edit', component: UserEditComponent}
    
  ];
  
