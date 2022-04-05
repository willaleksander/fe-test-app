import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UsersCreateComponent } from './users-create/users-create.component'; 

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/create', component: UsersCreateComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
