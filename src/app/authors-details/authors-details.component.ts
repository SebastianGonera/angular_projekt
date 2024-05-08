import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthorsService } from "../service/authors.service";

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
  constructor(private author_service: AuthorsService,
    private route: ActivatedRoute
  ){}
  ngOnInit(){
    this.authorId = this.route.snapshot.paramMap.get('id');
    this.author_service.getAuthor(this.authorId).subscribe({
      next:(data)=>{
        this.author = data.author;
      }
    });
  }
}
