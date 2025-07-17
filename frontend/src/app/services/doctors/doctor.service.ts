

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:5000/doctors';

  constructor(private http: HttpClient) { }

  addDoctor(doctor: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/insertDoctor`, doctor);
  }

  getDoctors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteDoctor(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteDoctor/${id}`);
  }

  updateDoctor(id: string, doctor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateDoctor/${id}`, doctor);
  }
}





