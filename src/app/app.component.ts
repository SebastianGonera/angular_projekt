import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {NavabrComponent} from "./navabr/navabr.component";
import { BooksService } from './service/books.service';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavabrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  hasLoaded: boolean = false;
  constructor(private books_service: BooksService){}
  async ngOnInit(){
    const books = await firstValueFrom(this.books_service.getAllBooks());
    if (books) {
      this.hasLoaded = true;
    }
  }
}
