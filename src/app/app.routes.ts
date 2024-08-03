import { Routes } from '@angular/router';
import { authenticationRoutes } from './authentication/authentication.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './authentication/authentication.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    children: authenticationRoutes,
    canActivate:[AuthGuard]
  },
  {
   path:'dashboard',
   component: DashboardComponent
  }
];
