import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BooksAllComponent } from "./books-all/books-all.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
