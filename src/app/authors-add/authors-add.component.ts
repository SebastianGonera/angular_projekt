import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthorsService } from '../service/authors.service';

@Component({
  selector: 'app-authors-add',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './authors-add.component.html',
  styleUrl: './authors-add.component.css'
})
export class AuthorsAddComponent {

  addForm: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    age: new FormControl(),
    email: new FormControl(''),
    address: new FormControl(''),
    about: new FormControl('')
  });

  constructor(
    private author_service: AuthorsService,
    private router: Router,
  ) { }

  onSubmit() {
    this.author_service.addAuthor(this.addForm.value).subscribe({
      next: (data) => {
        if ((Object.values(data) as unknown as string) == "New author added successfully") {
          this.router.navigate(['authors']);

        }
      }
    });
  }
}
