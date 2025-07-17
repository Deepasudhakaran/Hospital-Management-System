import { Component, ViewChild } from '@angular/core';
import { PatientFormComponent } from '../patient-form/patient-form.component';
import { PatientListComponent } from '../patient-list/patient-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient',
  imports: [PatientFormComponent,PatientListComponent,FormsModule,],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {

     selectedPatient: any = null;

  onEditPatient(patient: any) {
    this.selectedPatient = { ...patient }; 
  }

  onPatientSaved() {
    this.selectedPatient = null; 
  }
}
