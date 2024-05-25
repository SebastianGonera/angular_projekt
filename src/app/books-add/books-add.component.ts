import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BooksService } from '../service/books.service';
import { AuthorsService } from '../service/authors.service';
import { Router, RouterModule } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-books-add',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './books-add.component.html',
  styleUrl: './books-add.component.css'
})
export class BooksAddComponent {
  selectedFile: File | null = null;
  all_authors: any = [];
  editForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    isbn: new FormControl(''),
    pages: new FormControl(),
    categories: new FormControl(''),
    description: new FormControl(''),
    authors: new FormControl(),
    published: new FormControl('')
  });


  constructor(
    private book_service: BooksService,
    private author_service: AuthorsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.author_service.getAllAuthors().subscribe({
      next: (data) => {
        let authrs = Object.values(data);
        this.all_authors = authrs[0];
      }
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) this.selectedFile = input.files[0];
  }

  async onSubmit() {
    let cover = "";
    if (this.selectedFile) {
      const data = await firstValueFrom(this.book_service.uploadCover(this.selectedFile));
      cover = data.secure_url;
    }
    let author = this.editForm.get("authors")?.value;
    let author_id = this.all_authors.filter((a: any) => a.fullName == author);
    const authors: any[] = [author_id[0]._id];
    let new_book = {
      "title": this.editForm.get("title")?.value,
      "isbn": this.editForm.get("isbn")?.value,
      "pages": this.editForm.get("pages")?.value,
      "categories": this.editForm.get("categories")?.value,
      "description": this.editForm.get("description")?.value,
      "authors": authors,
      "published": this.editForm.get("published")?.value,
      "cover": cover
    };
    this.book_service.addBook(new_book).subscribe(data => {
      if (data) {
        this.router.navigate(['books']);
      }
    });
  }



}
