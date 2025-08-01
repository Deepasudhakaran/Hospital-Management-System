import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-appointment',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-appointment.component.html',
  styleUrl: './user-appointment.component.css'
})
export class UserAppointmentComponent {
  @Input() appointmentToEdit: any = null;
  @Output() appointmentSaved = new EventEmitter<void>();

  appointment = {
    _id :'',
    patient_name: '',
    doctor_name: '',
    date: '',
    age:'',
    phone:'',
    speciality:''
  };

  isEditMode = false;
  constructor(private appointmentService: UserService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appointmentToEdit'] && this.appointmentToEdit) {
      this.appointment = { ...this.appointmentToEdit };
      this.isEditMode = true;
    }
  }

  addAppointment() {
    const { _id, ...appointmentToSend } = this.appointment;
    this.appointmentService.addAppointments(appointmentToSend).subscribe({
      next: (res) => {
        console.log('Appointment added:', res);
        this.appointment = {   _id :'', patient_name: '', doctor_name: '', date: '', age:'', speciality:'', phone:''};
        alert('Successfully added');
      },
      error: (err) => {
        console.error('Error adding appointment:', err);
      }
    });
  
}
resetForm() {
  this.appointment = {   _id :'', patient_name: '', doctor_name: '', date: '', age:'', speciality:'', phone:'' };
  this.isEditMode = false;
}
}
