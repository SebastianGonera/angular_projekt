import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthorsService } from '../service/authors.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-authors-edit',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './authors-edit.component.html',
  styleUrl: './authors-edit.component.css'
})
export class AuthorsEditComponent {
  author: any | null = null;
  authorId: string | null = null;
  editForm: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    age: new FormControl(),
    email: new FormControl(''),
    address: new FormControl(''),
    about: new FormControl('')
  });

  constructor(
    private author_service: AuthorsService,
    private router: Router,
    private activated_route: ActivatedRoute
  ){}

  ngOnInit(){
    this.authorId = this.activated_route
    .snapshot.paramMap.get('id');
    this.author_service.getAuthor(this.authorId).subscribe({
      next: (data)=>{
        this.author = data.author;
      }
    });
  }

  onSubmit(){
    console.log(this.editForm.value);
    this.author_service.editAuthor(this.editForm.value, this.authorId).subscribe({
      next: (data)=>{
        if(data){
          this.router.navigate([`author/${this.authorId}`]);
        }
      }
    });
  }
}
