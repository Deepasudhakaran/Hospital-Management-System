
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { DoctorService } from '../../../services/doctors/doctor.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './doctor-form.component.html',
  styleUrl: './doctor-form.component.css'
})
export class DoctorFormComponent {
  @Input() doctorToEdit: any = null;
  @Output() doctorSaved = new EventEmitter<void>();

  doctor = {
    _id: '',
    name: '',
    speciality: ''
  };

  isEditMode = false;

  constructor(private doctorService: DoctorService) { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['doctorToEdit'] && this.doctorToEdit) {
      this.doctor = { ...this.doctorToEdit };
      this.isEditMode = true;
    }
  }

  addDoctor() {
    if (this.isEditMode) {
      this.doctorService.updateDoctor(this.doctor._id, this.doctor).subscribe({
        next: (res) => {
          alert('Doctor updated successfully');
          this.resetForm();
          this.doctorSaved.emit();
        },
        error: (err) => console.error(err)
      });

    } else {
      const { _id, ...doctorsToSend } = this.doctor; 
      this.doctorService.addDoctor(doctorsToSend ).subscribe({
        next: (res) => {
          console.log('Doctor added:', res);
          this.doctor = { name: '', speciality: '', _id: '', };
          alert('succesfully added')
        },
        error: (err) => {
          console.error('Error adding doctor:', err);
        }
      });
    }
  }
  resetForm() {
    this.doctor = { name: '', speciality: '', _id: '', };
    this.isEditMode = false;
  }
}
