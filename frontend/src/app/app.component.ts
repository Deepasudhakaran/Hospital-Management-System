import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NavbarComponent, LoginComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  constructor(public router: Router) { }



  currentPage: string = 'register';
  editMode: boolean = false;
  loggedInUser: string = '';

  goToRegistration() {
    this.currentPage = 'register';
  }

  goToLogin() {
    this.currentPage = 'login';
  }

  loginSucces(userName: string) {
    this.currentPage = 'home';
    this.loggedInUser = userName;
  }
}
