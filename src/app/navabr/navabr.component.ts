import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-navabr',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './navabr.component.html',
  styleUrl: './navabr.component.css'
})
export class NavabrComponent {
  hasLogin: boolean = false;
  username: string | null = "";
  ngOnInit(){
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('user_id');
    this.username = localStorage.getItem('username');
    if(token && userId){
      this.hasLogin = true;
    }
    else{
      this.hasLogin = false;
    }
  }

  logOut(){
    this.hasLogin = false;
    localStorage.clear();
  }
}
