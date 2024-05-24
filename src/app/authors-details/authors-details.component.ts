import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthorsService } from "../service/authors.service";
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-authors-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './authors-details.component.html',
  styleUrl: './authors-details.component.css'
})
export class AuthorsDetailsComponent {
  author: any | null = null;
  authorId: string | null = null;
  hasAuthor: boolean = false;
  hasLogged: boolean = false;

  constructor(private author_service: AuthorsService,
    private route: ActivatedRoute,
    private user_service: UsersService
  ){}
  ngOnInit(){
    const token = localStorage.getItem('token');
    if(token){
      this.hasLogged = true;
    }
    else{
      this.hasLogged = false;
    }
    this.authorId = this.route.snapshot.paramMap.get('id');
    this.author_service.getAuthor(this.authorId).subscribe({
      next:(data)=>{
        this.author = data.author;
      }
    });
    this.user_service.getFavoriteAuthors().subscribe({
      next: (data)=>{
        const authors: any[] = (Object.values(data)[0] as unknown) as any;
        if(authors.length <= 0){
          this.hasAuthor = false;
        }
        else{
          for (let i = 0; i < authors.length; i++) {
             if(this.authorId == authors[i]._id){
              this.hasAuthor = true;
             }
          }
        }
      }
    });
  }
  
  addFavoriteAuthor(){
    this.user_service.addFavoriteAuthor(this.authorId).subscribe({
      next: (data) =>{
        if(Object.values(data)){
          this.hasAuthor = true;
        }
      }
    });
  }
  
  removeFavoriteAuthor(){
    this.user_service.removeFavoriteAuthor(this.authorId).subscribe({
      next: (data)=>{
        if(Object.values(data)){
          this.hasAuthor = false;
        }
      }
    })
  }

}
