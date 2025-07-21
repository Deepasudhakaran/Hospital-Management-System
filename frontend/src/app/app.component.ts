import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
