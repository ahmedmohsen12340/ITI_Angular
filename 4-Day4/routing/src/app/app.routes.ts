import { Routes } from '@angular/router';
import { formComponent } from './form/form.component';
import { StudentsComponent } from './students/students.component';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', component: formComponent },
  { path: 'form', component: formComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: DetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: ErrorComponent },
];
