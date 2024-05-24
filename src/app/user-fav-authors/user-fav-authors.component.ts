import { Component } from '@angular/core';
import { UsersService } from "../service/users.service";
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-user-fav-authors',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-fav-authors.component.html',
  styleUrl: './user-fav-authors.component.css'
})
export class UserFavAuthorsComponent {
  authors:any = [];
  constructor(private users_service : UsersService){}
  ngOnInit(){
    this.users_service.getFavoriteAuthors().subscribe({
      next: (data)=>{
        console.log(Object.values(data)[0]);
        this.authors = Object.values(data)[0];
      }
    });
  }

}
