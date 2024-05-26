import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from "../service/users.service";
import { Router, RouterModule } from '@angular/router';

interface User{
  _id: string,
  username: string,
  email: string,
  password: string,
  isAdmin: boolean,
}

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitted:boolean = false;
  constructor(private users_service: UsersService,
    private router: Router
  ){}
  onSubmit(){
    this.users_service.loginUser(this.loginForm.value)
    .subscribe(data=>{
      let obj = Object.values(data);
      let test : User = obj[1] as User;
      localStorage.setItem("user_id", test._id);
      localStorage.setItem("username", test.username);
      localStorage.setItem("user_email", test.email);
      localStorage.setItem("user_isAdmin", test.isAdmin.toString());
      localStorage.setItem("token", JSON.stringify(obj[0]));
      this.router.navigate(['/']);
    });
   
  }
}
