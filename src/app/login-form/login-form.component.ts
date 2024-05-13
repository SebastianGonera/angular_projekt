import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from "../service/users.service";

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
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitted:boolean = false;
  constructor(private users_service: UsersService){}
  onSubmit(){
    console.log(this.loginForm.value);
    this.users_service.loginUser(this.loginForm.value)
    .subscribe(data=>{
      console.log(Object.values(data));
      let obj = Object.values(data);
      let test : User = obj[1] as User;
      //console.log(test._id);
      localStorage.setItem("user_id", test._id);
      localStorage.setItem("token", JSON.stringify(obj[0]));
      this.users_service.showFavoriteAuthors();
    });
   
  }
}
