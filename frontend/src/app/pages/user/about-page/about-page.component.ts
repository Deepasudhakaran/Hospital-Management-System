import { Component } from '@angular/core';
import { UserNavbarComponent } from '../../../components/userComponent/user-navbar/user-navbar.component';
import { AboutComponent } from '../../../components/userComponent/about/about.component';
import { UserFooterComponent } from '../../../components/userComponent/user-footer/user-footer.component';

@Component({
  selector: 'app-about-page',
  imports: [UserNavbarComponent,AboutComponent,UserFooterComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
