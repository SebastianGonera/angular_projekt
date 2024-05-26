import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from "../service/users.service";
@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('')
  });
  username: string = "";
  email: string = "";

  constructor(private user_service: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('username') || "";
    this.email = localStorage.getItem('user_email') || "";
  }

  onSubmit() {
    this.username = this.form.get('username')?.value;
    this.email = this.form.get('email')?.value;
    const editedUser = {
      username: this.form.get('username')?.value,
      email: this.form.get('email')?.value
    };

    this.user_service.updateUser(editedUser).subscribe({
      next: (data) => {
        const res = Object.values(data);
        if (res[0] == "User successfully updated") {
          localStorage.removeItem('token');
          localStorage.setItem('token', JSON.stringify(res[1]));
          localStorage.setItem('username', this.username);
          localStorage.setItem('user_email', this.email);
          this.router.navigate(['/']);
        }

      }
    });
  }

}
