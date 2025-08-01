import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  imports: [ RouterModule,CommonModule,FormsModule],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent {
constructor(private router: Router) {}

  get isLoggedIn(): boolean {
    return localStorage.getItem('userLoggedIn') === 'true';
  }

  logout() {
  localStorage.removeItem('userLoggedIn');
    this.router.navigate(['/login']);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
