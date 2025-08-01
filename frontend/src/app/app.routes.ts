import { Routes } from '@angular/router';
import { AppointmentComponent } from './components/appointments/appointment/appointment.component';
import { DoctorComponent } from './components/doctors/doctor/doctor.component';
import { PatientComponent } from './components/patients/patient/patient.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { AppointmentPageComponent } from './pages/user/appointment-page/appointment-page.component';
import { DoctorPageComponent } from './pages/user/doctor-page/doctor-page.component';
import { UserHomePageComponent } from './pages/user/user-home-page/user-home-page.component';
import { AboutPageComponent } from './pages/user/about-page/about-page.component';
import { DepartmentPageComponent } from './pages/user/department-page/department-page.component';
import { ContactPageComponent } from './pages/user/contact-page/contact-page.component';
import { authGuard } from './guards/auth.guard';
import { AdministrationloginComponent } from './components/auth/administrationlogin/administrationlogin.component';
import { adminauthGuard } from './guards/adminauth.guard';

export const routes: Routes = [

  //  { path: '', 
  //   redirectTo: 'userHome',
  //    pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'administration',
    component: AdministrationloginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    canActivate: [adminauthGuard],
    children: [
      {
        path: 'home',
        component: HomepageComponent
      },
      {
        path: 'appointment',
        component: AppointmentComponent
      },
      {
        path: 'doctor',
        component: DoctorComponent
      },
      {
        path: 'patient',
        component: PatientComponent
      }
    ]
  },

  {
    path: '',
    component: UserHomePageComponent,

  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'userappointment',
    component: AppointmentPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'department',
    component: DepartmentPageComponent,
  },
  {
    path: 'userdoctors',
    component: DoctorPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  }
];
