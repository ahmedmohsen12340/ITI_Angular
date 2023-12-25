import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { ErrorComponent } from './error/error.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: '**', component: ErrorComponent },
];
