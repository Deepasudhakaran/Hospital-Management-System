import { Component } from '@angular/core';
import { UserNavbarComponent } from '../../../components/userComponent/user-navbar/user-navbar.component';
import { UserFooterComponent } from '../../../components/userComponent/user-footer/user-footer.component';
import { UserContactComponent } from '../../../components/userComponent/user-contact/user-contact.component';

@Component({
  selector: 'app-contact-page',
  imports: [UserNavbarComponent,UserContactComponent,UserFooterComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
