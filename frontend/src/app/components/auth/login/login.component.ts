import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../interface/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName: string = '';
  password: string = '';

  @Output() loginSuccesEvent = new EventEmitter<string>();
  @Output() goToRegistrationEvent = new EventEmitter<string>();

  constructor(private userService: UserService) {}

  authenticateStudent() {
    console.log("userName", this.userName);
    console.log("password", this.password);
    this.userService.authenticateUser(this.userName, this.password)
      .subscribe((result: User[]) => {
        if (result.length) {
          alert("login success");
          this.loginSuccesEvent.emit(this.userName);
        } else {
          alert("authentication failed");
        }
      });
  }

  goToRegistration() {
    this.goToRegistrationEvent.emit();
  }
}
