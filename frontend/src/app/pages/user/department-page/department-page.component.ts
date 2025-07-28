import { Component } from '@angular/core';
import { UserNavbarComponent } from '../../../components/userComponent/user-navbar/user-navbar.component';
import { DepartmentsComponent } from '../../../components/userComponent/departments/departments.component';
import { UserFooterComponent } from '../../../components/userComponent/user-footer/user-footer.component';

@Component({
  selector: 'app-department-page',
  imports: [UserNavbarComponent,DepartmentsComponent,UserFooterComponent],
  templateUrl: './department-page.component.html',
  styleUrl: './department-page.component.css'
})
export class DepartmentPageComponent {

}
