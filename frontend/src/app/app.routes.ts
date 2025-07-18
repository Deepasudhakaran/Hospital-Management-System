import { Routes } from '@angular/router';
import { AppointmentComponent } from './components/appointments/appointment/appointment.component';
import { DoctorComponent } from './components/doctors/doctor/doctor.component';
import { PatientComponent } from './components/patients/patient/patient.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
}, {
    path: 'appointment',
    component: AppointmentComponent
}, {
    path: 'doctor',
    component: DoctorComponent
},
{
    path: 'patient',
    component: PatientComponent,      
},
{
    path: 'login',
    component: LoginComponent,      
},
{
    path: 'register',
    component: RegisterComponent,      
},
{
    path: 'home',
    component: HomepageComponent,      
},
{
    path: 'navbar',
    component: NavbarComponent,      
},

];
