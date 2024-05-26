import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UsersService } from '../service/users.service';

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

  constructor(private user_service: UsersService,
    private router: Router
  ){}

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

  deleteAccount(){
    this.user_service.deleteUser().subscribe({
      next: (data)=>{
        console.log(data);
        if(Object.values(data)){
          localStorage.clear();
        }
      }
    });
  }

  logOut(){
    this.hasLogin = false;
    localStorage.clear();
  }
}
