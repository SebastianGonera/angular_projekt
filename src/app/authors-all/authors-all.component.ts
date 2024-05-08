import { Component } from '@angular/core';
import {AuthorsService} from '../service/authors.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authors-all',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './authors-all.component.html',
  styleUrl: './authors-all.component.css'
})
export class AuthorsAllComponent {
  authors: any[]|null = [];
  constructor(private author_service: AuthorsService){}
  ngOnInit(){
    this.author_service.getAllAuthors().subscribe({
      next:(data)=>{
        let obj = Object.values(data);
        this.authors = obj[0];
      }
    });
  }
}
