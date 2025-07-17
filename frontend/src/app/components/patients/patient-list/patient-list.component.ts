
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../../../services/patients/patient.service';

@Component({
  selector: 'app-patient-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent {

  patients: any[] = [];
  patientsToDisplay: any[] = [];

  pageNumber: number = 1;
  itemsPerPage: number = 3;
  totalNoOfPage: number = 0;
  pageNumberArray: number[] = [];

   @Output() editPatient = new EventEmitter<any>();
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients(): void {
    this.patientService.getDoctors().subscribe({
      next: (res: any[]) => {
        this.patients = res;
        this.setupPagination();
      },
      error: (err) => {
        console.error('Error fetching doctors:', err);
      }
    });
  }

  setupPagination(): void {
    this.totalNoOfPage = Math.ceil(this.patients.length / this.itemsPerPage);
    this.pageNumberArray = Array.from({ length: this.totalNoOfPage }, (_, i) => i + 1);
    this.updatePatientsToDisplay();
  }

  updatePatientsToDisplay(): void {
    const start = (this.pageNumber - 1) * this.itemsPerPage;
    const end = this.pageNumber * this.itemsPerPage;
    this.patientsToDisplay = this.patients.slice(start, end);
  }

  showNextItems(): void {
    if (this.pageNumber < this.totalNoOfPage) {
      this.pageNumber++;
      this.updatePatientsToDisplay();
    }
  }

  goToPreviousPage(): void {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.updatePatientsToDisplay();
    }
  }

  setPageSelected(page: number): void {
    this.pageNumber = page;
    this.updatePatientsToDisplay();
  }

  deletePatient(id: string) {
    if (confirm('Are you sure you want to delete this patient?')) {
      this.patientService.deletePatient(id).subscribe(() => {
        this.fetchPatients();
      });
    }
  }
    onEditClick(patient: any) {
    this.editPatient.emit(patient);
  }

}
