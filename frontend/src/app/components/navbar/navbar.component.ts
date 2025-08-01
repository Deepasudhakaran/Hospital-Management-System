import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
title = 'frontend';
  constructor(public router: Router) {}

  get isLoggedIn(): boolean {
    return localStorage.getItem('adminitrationLoggedIn') === 'true';
  }

  logout() {
  localStorage.removeItem('adminitrationLoggedIn');
    this.router.navigate(['/administration']);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
