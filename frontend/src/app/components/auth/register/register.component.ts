import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../../interface/user';
import { UserService } from '../../../services/user/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: User = {
    userName: '',
    email: '',
    password: '',
  };
  confirmpassword: string = '';

  @Output() goToLoginEvent = new EventEmitter<string>();
  constructor(private userService: UserService) { }

  addUser() {
    if (this.user.password !== this.confirmpassword) {
      alert('Passwords do not match');
      return;
    }
    this.userService.insertUser(this.user).subscribe({
      next: (res) => {
        console.log('User added:', res);
        alert('Successfully registered!');
        this.resetForm();
        this.goToLogin()
      },
      error: (err) => {
        console.error('Error adding user:', err);
      }
    });
  }

  resetForm() {
    this.user = { userName: '', email: '', password: '' };
    this.confirmpassword = '';
  }
  goToLogin() {
    this.goToLoginEvent.emit();
  }
}
