import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WelcomeLayoutComponent } from './layouts/welcome-layout/welcome-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module'
      }]}, {
    path: 'home',
    component: WelcomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/welcome-layout/welcome-layout.module'
      }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
