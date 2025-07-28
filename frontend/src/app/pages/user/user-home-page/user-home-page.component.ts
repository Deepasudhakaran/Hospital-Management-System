import { Component } from '@angular/core';
import { UserNavbarComponent } from '../../../components/userComponent/user-navbar/user-navbar.component';
import { UserHomeComponent } from '../../../components/userComponent/user-home/user-home.component';
import { UserFooterComponent } from '../../../components/userComponent/user-footer/user-footer.component';

@Component({
  selector: 'app-user-home-page',
  imports: [UserNavbarComponent,UserHomeComponent,UserFooterComponent],
  templateUrl: './user-home-page.component.html',
  styleUrl: './user-home-page.component.css'
})
export class UserHomePageComponent {

}
