import { Component } from '@angular/core';
import { BooksService } from "../service/books.service";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsersService } from "../service/users.service";



@Component({
  selector: 'app-books-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './books-details.component.html',
  styleUrl: './books-details.component.css'
})
export class BooksDetailsComponent {
book: any | null = null;
bookId: string|null = null;
hasBook: boolean = false;
hasLogged: boolean = false;
constructor(
  private book_service: BooksService,
  private user_service: UsersService,
  private route: ActivatedRoute
){}


ngOnInit(){
  const token = localStorage.getItem('token');
    if(token){
      this.hasLogged = true;
    }
    else{
      this.hasLogged = false;
    }
  this.bookId = this.route.snapshot.paramMap.get('id');
  this.book_service.getBook(this.bookId).subscribe({
    next:(data)=>{
      this.book = data.book;
    }
  });

  this.user_service.getFavoriteBooks().subscribe({
    next: (data)=>{
      const books: any[] = (Object.values(data)[0] as unknown) as any;
      if(books.length <= 0){
        this.hasBook = false;
      }
      else{
        for (let i = 0; i < books.length; i++) {
           if(this.bookId == books[i]._id){
            this.hasBook = true;
           }
        }
      }
    }
  });
}

addFavoriteBook(){
  //console.log("Dziala addFav");

  this.user_service.addFavoriteBook(this.bookId).subscribe({
    next: (data) =>{
      if(Object.values(data)){
        this.hasBook = true;
      }
    }
  });
}

removeFavoriteBook(){
  //console.log("Działa remove");
  this.user_service.removeFavoriteBook(this.bookId).subscribe({
    next: (data)=>{
      if(Object.values(data)){
        this.hasBook = false;
      }
    }
  })
}
}
