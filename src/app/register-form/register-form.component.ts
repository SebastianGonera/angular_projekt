import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from "../service/users.service";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  created: boolean = false;
  submitted: boolean = false;

  constructor(private users_service: UsersService) { }
  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
    this.users_service.registerUser(this.registerForm.value)
    .subscribe(mess =>{
      if (Object.values(mess).toString() == "User created successfully") {
        console.log(mess);
        this.created = true;
      }
  
    });

  }
}
