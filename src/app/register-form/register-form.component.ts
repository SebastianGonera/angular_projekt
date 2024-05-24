import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from "../service/users.service";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private users_service: UsersService,  private router: Router) { }
  onSubmit() {
    console.log(this.registerForm.value);
    this.users_service.registerUser(this.registerForm.value)
    .subscribe(mess =>{
      if (Object.values(mess).toString() == "User created successfully") {
        console.log(mess);
        this.router.navigate(['home']);
      
      }
  
    });

  }
}
