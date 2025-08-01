import { Component } from '@angular/core';
import { AdministrationService } from '../../../services/administration/administration.service';
import { User } from '../../../interface/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-administrationlogin',
  imports: [FormsModule, CommonModule],
  templateUrl: './administrationlogin.component.html',
  styleUrl: './administrationlogin.component.css'
})
export class AdministrationloginComponent {
  user = {
    userName: '',
    password: ''
  };
  constructor(private administractionService: AdministrationService, private router: Router) { }

  authenticateUser() {
    const { userName, password } = this.user;

    if (!userName || !password) {
      alert('Please enter username and password.');
      return;
    }

    this.administractionService.authenticateUser(userName, password).subscribe(
      (result: User) => {
        if (result) {
          alert('Login successful!');
          localStorage.setItem('adminitrationLoggedIn', 'true');
          this.router.navigate(['/home/home']);
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
