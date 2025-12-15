import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  private apiUrl = 'https://hospital-management-system-backend-135p.onrender.com';

  constructor(private http: HttpClient) { }

  authenticateUser(userName: string, password: string): Observable<User> {
    const body = { userName, password };
    return this.http.post<User>(`${this.apiUrl}/adminlogin`, body);
  }
  checkIfAdministrationLoggedIn(): boolean {
    return localStorage.getItem('adminitrationLoggedIn') === 'true';
  }
}
