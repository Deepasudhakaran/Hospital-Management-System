import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/users';
  private userapiUrl = 'http://localhost:5000/users';

  constructor(private http: HttpClient) { }

  insertUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/insertUser`, user);
  }
  authenticateUser(userName: string, password: string): Observable<User> {
    const body = { userName, password };
    return this.http.post<User>(`${this.apiUrl}/userlogin`, body);
  }

  addAppointments(appointment: any): Observable<any> {
    return this.http.post(`${this.userapiUrl}/userinsertAppointment`, appointment);
  }

}


