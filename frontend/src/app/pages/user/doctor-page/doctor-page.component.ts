import { Component } from '@angular/core';
import { UserNavbarComponent } from '../../../components/userComponent/user-navbar/user-navbar.component';
import { DoctorsComponent } from '../../../components/userComponent/doctors/doctors.component';
import { UserFooterComponent } from '../../../components/userComponent/user-footer/user-footer.component';

@Component({
  selector: 'app-doctor-page',
  imports: [UserNavbarComponent,DoctorsComponent,UserFooterComponent],
  templateUrl: './doctor-page.component.html',
  styleUrl: './doctor-page.component.css'
})
export class DoctorPageComponent {

}
