import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../../services/appointments/appointment.service';

@Component({
  selector: 'app-appointment-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  
   appointments: any[] = [];
   appointmentsToDisplay: any[] = [];
  
    pageNumber: number = 1;
    itemsPerPage: number = 3;
    totalNoOfPage: number = 0;
    pageNumberArray: number[] = [];
  
     @Output() editAppointment = new EventEmitter<any>();
    constructor(private appointmentService: AppointmentService) {}
  
    ngOnInit(): void {
      this.fetchAppointment();
    }
  
    fetchAppointment(): void {
      this.appointmentService.getAppointments().subscribe({
        next: (res: any[]) => {
          this.appointments = res;
          this.setupPagination();
        },
        error: (err) => {
          console.error('Error fetching doctors:', err);
        }
      });
    }
  
    setupPagination(): void {
      this.totalNoOfPage = Math.ceil(this.appointments.length / this.itemsPerPage);
      this.pageNumberArray = Array.from({ length: this.totalNoOfPage }, (_, i) => i + 1);
      this.updateAppointmentsToDisplay();
    }
  
    updateAppointmentsToDisplay(): void {
      const start = (this.pageNumber - 1) * this.itemsPerPage;
      const end = this.pageNumber * this.itemsPerPage;
      this.appointmentsToDisplay = this.appointments.slice(start, end);
    }
  
    showNextItems(): void {
      if (this.pageNumber < this.totalNoOfPage) {
        this.pageNumber++;
        this.updateAppointmentsToDisplay();
      }
    }
  
    goToPreviousPage(): void {
      if (this.pageNumber > 1) {
        this.pageNumber--;
        this.updateAppointmentsToDisplay();
      }
    }
  
    setPageSelected(page: number): void {
      this.pageNumber = page;
      this.updateAppointmentsToDisplay();
    }

      deleteAppointment(id: string) {
    if (confirm('Are you sure you want to delete this patient?')) {
      this.appointmentService.deleteAppointment(id).subscribe(() => {
        this.fetchAppointment();
      });
    }
  }

  onEditClick(appointment: any) {
    this.editAppointment.emit(appointment);
  }
}




