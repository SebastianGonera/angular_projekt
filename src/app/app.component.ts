import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {NavabrComponent} from "./navabr/navabr.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavabrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
