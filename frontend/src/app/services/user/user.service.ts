import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  insertUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/insertUser`, user);
  }
  private apiUrl = 'http://localhost:5000/users';

  constructor(private http: HttpClient) { }

  authenticateUser(userName: string, password: string): Observable<User[]> {
    const params = new HttpParams()
      .set('userName', userName)
      .set('password', password);
    return this.http.get<User[]>(`${this.apiUrl}/userlogin`, { params });
  }
}


