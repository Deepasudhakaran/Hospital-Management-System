import { Routes } from '@angular/router';
import { AppointmentComponent } from './components/appointments/appointment/appointment.component';
import { DoctorComponent } from './components/doctors/doctor/doctor.component';
import { PatientComponent } from './components/patients/patient/patient.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';

export const routes: Routes = [

{
    path: 'login',
    component: LoginComponent,      
},
{
    path: 'register',
    component: RegisterComponent,      
},
{
    path: '',
    component: MainLayoutComponent,  
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
  }

];
