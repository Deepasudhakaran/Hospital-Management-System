import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../interface/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = {
    userName: '',
    email: '',
    password: ''
  };
  constructor(private userService: UserService, private router: Router) { }


  authenticateUser() {
    const { userName, password } = this.user;

    if (!userName || !password) {
      alert('Please enter username and password.');
      return;
    }

    this.userService.authenticateUser(userName, password).subscribe(
      (result: User) => {
        if (result) {
          alert('Login successful!');
          this.router.navigate(['/userHome']);
        } else {
          alert('Invalid credentials. Please try again.');
        }
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');
      }
    );
  }
}





