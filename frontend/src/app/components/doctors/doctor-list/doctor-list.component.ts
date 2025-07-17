import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorService } from '../../../services/doctors/doctor.service';

@Component({
  selector: 'app-doctor-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export class DoctorListComponent {

 doctors: any[] = [];
 doctorsToDisplay: any[] = [];

  pageNumber: number = 1;
  itemsPerPage: number = 3;
  totalNoOfPage: number = 0;
  pageNumberArray: number[] = [];


   @Output() editDoctor = new EventEmitter<any>();
  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.fetchDoctors();
  }

  fetchDoctors(): void {
    this.doctorService.getDoctors().subscribe({
      next: (res: any[]) => {
        this.doctors = res;
        this.setupPagination();
      },
      error: (err) => {
        console.error('Error fetching doctors:', err);
      }
    });
  }

  setupPagination(): void {
    this.totalNoOfPage = Math.ceil(this.doctors.length / this.itemsPerPage);
    this.pageNumberArray = Array.from({ length: this.totalNoOfPage }, (_, i) => i + 1);
    this.updateDoctorsToDisplay();
  }

  updateDoctorsToDisplay(): void {
    const start = (this.pageNumber - 1) * this.itemsPerPage;
    const end = this.pageNumber * this.itemsPerPage;
    this.doctorsToDisplay = this.doctors.slice(start, end);
  }

  showNextItems(): void {
    if (this.pageNumber < this.totalNoOfPage) {
      this.pageNumber++;
      this.updateDoctorsToDisplay();
    }
  }

  goToPreviousPage(): void {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.updateDoctorsToDisplay();
    }
  }

  setPageSelected(page: number): void {
    this.pageNumber = page;
    this.updateDoctorsToDisplay();
  }


  deleteDoctor(id: string) {
    if (confirm('Are you sure you want to delete this doctor?')) {
      this.doctorService.deleteDoctor(id).subscribe(() => {
        this.fetchDoctors(); 
      });
    }
  }

  onEditClick(doctor: any) {
    this.editDoctor.emit(doctor);
  }

}






















