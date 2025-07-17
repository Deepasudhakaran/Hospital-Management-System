import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


 private apiUrl = 'http://localhost:5000/';
  constructor(private http: HttpClient) { }

  authenticateUser(userName: string, password: string) {
    return this.http.get<User[]>(this.apiUrl + userName + "&password=" + password
)
  }

  checkIfStudentNameExist(userName: String) {
    return this.http.get<User[]>(this.apiUrl + userName)
  }

  insertStudent(user: User) {
    return this.http.post(this.apiUrl, user);
  }
}
