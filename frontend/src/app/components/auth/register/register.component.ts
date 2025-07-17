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

  student: User = {
    userName: '',
    email: '',
    password: '',
  }
  confirmpassword: string = '';
@Output() goToLoginEvent = new EventEmitter<string>();
  constructor(private userService: UserService) {

  }


  registerStudent() {
    console.log(this.student);
    //add logic to check if user name exist
    this.userService.checkIfStudentNameExist(this.student.userName).subscribe(result => {
      if (result.length) {
        alert("student name already exist")
      } else {
        alert("successfully registered")
        this.userService.insertStudent(this.student).subscribe(result => {
          console.log("result", result);
        });
      }
    })

  }


  goToLogin(){
this.goToLoginEvent.emit();
  }
}
