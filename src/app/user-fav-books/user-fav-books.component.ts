import { Component } from '@angular/core';
import { UsersService } from "../service/users.service";
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-user-fav-books',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-fav-books.component.html',
  styleUrl: './user-fav-books.component.css'
})
export class UserFavBooksComponent {
  books:any = [];
  constructor(private users_service : UsersService){}
  ngOnInit(){
    this.users_service.getFavoriteBooks().subscribe({
      next: (data)=>{
        this.books = Object.values(data)[0];
      }
    });
  }
}
