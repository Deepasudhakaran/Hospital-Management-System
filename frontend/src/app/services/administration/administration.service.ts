import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  private apiUrl = 'http://localhost:5000/users';

  constructor(private http: HttpClient) { }

  authenticateUser(userName: string, password: string): Observable<User> {
    const body = { userName, password };
    return this.http.post<User>(`${this.apiUrl}/adminlogin`, body);
  }
  checkIfAdministrationLoggedIn(): boolean {
    return localStorage.getItem('adminitrationLoggedIn') === 'true';
  }
}
