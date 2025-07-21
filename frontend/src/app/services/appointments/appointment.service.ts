import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = 'http://localhost:5000/appointments';

  constructor(private http: HttpClient) { }

  addAppointments(appointment: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/insertAppointment`, appointment);
  }

  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteAppointment/${id}`);
  }
   updateAppointment(id: string, appointment: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateAppointment/${id}`, appointment);
  }

}