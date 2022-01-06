import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MedicineComponent } from './medicine/medicine.component';
import { PatientsComponent } from './patients/patients.component';

import { AuthGuard } from './authentication/auth.guard';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'log-in', component: SigninComponent},
  { path: 'sign-up', component: SignupComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'medicine', component: MedicineComponent, canActivate: [AuthGuard] },
  { path: 'patients', component: PatientsComponent, canActivate: [AuthGuard] }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
