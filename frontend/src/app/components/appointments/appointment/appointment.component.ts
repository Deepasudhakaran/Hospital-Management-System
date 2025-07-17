import { Component } from '@angular/core';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import { AppointmentFormComponent } from '../appointment-form/appointment-form.component';

@Component({
  selector: 'app-appointment',
  imports: [AppointmentListComponent, AppointmentFormComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  selectedAppointment: any = null;

  onEditAppointment(appointment: any) {
    this.selectedAppointment = { ...appointment };
  }

  onAppointmentSaved() {
    this.selectedAppointment = null;
  }
}
