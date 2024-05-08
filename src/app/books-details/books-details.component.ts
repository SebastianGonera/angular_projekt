import { Component } from '@angular/core';
import { BooksService } from "../service/books.service";
import { ActivatedRoute, RouterModule } from '@angular/router';

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
constructor(private book_service: BooksService,
  private route: ActivatedRoute
){}
ngOnInit(){
  this.bookId = this.route.snapshot.paramMap.get('id');
  this.book_service.getBook(this.bookId).subscribe({
    next:(data)=>{
      this.book = data.book;
    }
  });
}
}
