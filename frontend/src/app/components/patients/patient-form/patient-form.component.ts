import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../../../services/patients/patient.service';

@Component({
  selector: 'app-patient-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css'
})
export class PatientFormComponent {

  @Input() patientToEdit: any = null;
  @Output() patientSaved = new EventEmitter<void>();

  patient = {
    _id: '',
    name: '',
    age: '',
    gender: ''
  };
  isEditMode = false;

  constructor(private patientService: PatientService) { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['patientToEdit'] && this.patientToEdit) {
      this.patient = { ...this.patientToEdit };
      this.isEditMode = true;
    }
  }
  addPatient() {
    if (this.isEditMode) {
      this.patientService.updatePatient(this.patient._id, this.patient).subscribe({
        next: (res) => {
          alert('patient details updated successfully');
          this.resetForm();
          this.patientSaved.emit();
        },
        error: (err) => console.error(err)
      });
    } else {
      const { _id, ...patientToSend } = this.patient; 
      this.patientService.addPatient(patientToSend).subscribe({
        next: (res) => {
          console.log('patien added:', res);
          this.patient = { name: '', age: '', gender: '', _id: '', };
           alert('succesfully added')
        },
        error: (err) => {
          console.error('Error adding patient:', err);
        }
      });
    }

  }
  resetForm() {
    this.patient = { name: '', _id: '', age: '', gender: '' };
    this.isEditMode = false;
  }

}
