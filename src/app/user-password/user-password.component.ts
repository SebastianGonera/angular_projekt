import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-password',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './user-password.component.html',
  styleUrl: './user-password.component.css'
})
export class UserPasswordComponent {
  form:FormGroup = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  constructor(private user_service: UsersService,
    private router: Router
  ){}

  onSubmit() {
    const pass = {
      password: this.form.get('password')?.value,
      confirmPass: this.form.get('confirmPassword')?.value
    };
    this.user_service.changePassword(pass).subscribe({
      next: (data)=>{
        if(data.message == "Password successfully changed for user"){
          this.router.navigate(['/']);
        }
      }
    });
  }
}
