

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:5000/patients';

  constructor(private http: HttpClient) { }

  addPatient(patient: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/insertPatient`, patient);
  }

  getDoctors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deletePatient(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deletePatient/${id}`);
  }
  updatePatient(id: string, patient: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updatePatient/${id}`, patient);
  }
}


