import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { AppointmentService } from '../../../services/appointments/appointment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css'
})
export class AppointmentFormComponent {

  @Input() appointmentToEdit: any = null;
  @Output() appointmentSaved = new EventEmitter<void>();

  appointment = {
    _id: '',
    patient_name: '',
    doctor_name: '',
    date: ''
  };

  isEditMode = false;
  constructor(private appointmentService: AppointmentService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appointmentToEdit'] && this.appointmentToEdit) {
      this.appointment = { ...this.appointmentToEdit };
      this.isEditMode = true;
    }
  }

  addAppointment() {
  if (this.isEditMode) {
    this.appointmentService.updateAppointment(this.appointment._id, this.appointment).subscribe({
      next: (res) => {
        alert('Appointment updated successfully');
        this.resetForm();
        this.appointmentSaved.emit();
      },
      error: (err) => console.error(err)
    });
  } else {
    const { _id, ...appointmentToSend } = this.appointment; 

    this.appointmentService.addAppointments(appointmentToSend).subscribe({
      next: (res) => {
        console.log('Appointment added:', res);
        this.appointment = { patient_name: '', doctor_name: '', date: '', _id: '', };
        alert('Successfully added');
      },
      error: (err) => {
        console.error('Error adding appointment:', err);
      }
    });
  }
}


  resetForm() {
    this.appointment = { _id: '', patient_name: '', doctor_name: '', date: '' };
    this.isEditMode = false;
  }
}



