import { Component } from '@angular/core';
import { DoctorFormComponent } from '../doctor-form/doctor-form.component';
import { DoctorListComponent } from '../doctor-list/doctor-list.component';

@Component({
  selector: 'app-doctor',
  imports: [DoctorFormComponent,DoctorListComponent,],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {

   selectedDoctor: any = null;

  onEditDoctor(doctor: any) {
    this.selectedDoctor = { ...doctor }; 
  }

  onDoctorSaved() {
    this.selectedDoctor = null; 
  }
}
