import { Component } from '@angular/core';
import { UserNavbarComponent } from '../../../components/userComponent/user-navbar/user-navbar.component';
import { UserAppointmentComponent } from '../../../components/userComponent/user-appointment/user-appointment.component';
import { UserFooterComponent } from '../../../components/userComponent/user-footer/user-footer.component';

@Component({
  selector: 'app-appointment-page',
  imports: [UserNavbarComponent,UserAppointmentComponent,UserFooterComponent],
  templateUrl: './appointment-page.component.html',
  styleUrl: './appointment-page.component.css'
})
export class AppointmentPageComponent {

}
