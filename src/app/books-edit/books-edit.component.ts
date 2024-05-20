import { Component } from '@angular/core';
import { BooksService } from "../service/books.service";
import { AuthorsService } from "../service/authors.service";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-books-edit',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './books-edit.component.html',
  styleUrl: './books-edit.component.css'
})
export class BooksEditComponent {
  selectedFile: File | null = null;
  authors: any[]= [];
  all_authors: any[] = [];
  book: any | null = null;
  bookId: string | null = null;
  editForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    isbn: new FormControl(''),
    pages: new FormControl(),
    categories: new FormControl(''),
    description: new FormControl(''),
    authors: new FormControl(),
    published: new FormControl('')  });

  constructor(
    private book_service: BooksService,
    private author_service: AuthorsService,
    private activated_route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.bookId = this.activated_route.snapshot.paramMap.get('id');
    this.book_service.getBook(this.bookId).subscribe({
      next: (data) => {
        this.book = data.book;
      }
    });
    this.author_service.getAllAuthors().subscribe({
      next: (data) => {
        let authrs = Object.values(data);
        this.all_authors = authrs[0];
        for (let i = 0; i < this.book.authors.length; i++) {
          console.log("III");
          for (let j = 0; j < authrs[0].length; j++) {
            console.log("JJJJ");
            console.log(this.book.authors[i]);
            console.log(authrs[0][j]);
            if (this.book.authors[i] == authrs[0][j]._id) {
              this.authors.push(authrs[0][j]);
            }
          }
        }
      }
    });
  }

  onFileSelected(event: Event){
    const input= event.target as HTMLInputElement;
    if(input.files) this.selectedFile = input.files[0];
  }
  async onSubmit() {
    console.log(this.editForm.value);
    let cover = "";
    if(this.selectedFile){
      const data = await firstValueFrom(this.book_service.uploadCover(this.selectedFile));
      cover = data.secure_url;
    }

    
    let author = this.editForm.get("authors")?.value;
    let author_id = this.all_authors.filter(a=> a.fullName == author);
    this.book.authors[0] = author_id[0]._id;
    let edited_book = {
      "title": this.editForm.get("title")?.value,
      "isbn": this.editForm.get("isbn")?.value,
      "pages": this.editForm.get("pages")?.value,
      "categories": this.editForm.get("categories")?.value,
      "description": this.editForm.get("description")?.value,
      "authors": this.book.authors,
      "published": this.editForm.get("published")?.value,
      "cover": cover
    };
    console.log(edited_book);
    this.book_service.editBook(edited_book, this.bookId)
      .subscribe(data => {
        if (data) {
          this.router.navigate([`book/${this.bookId}`]);
        }
      });
  }
}
