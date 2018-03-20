import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemListComponent} from './dashboard/item-list/item-list.component';
import {LoginComponent} from './login/login.component';
import {UserService} from './user.service';

const routes: Routes = [
  // landing page for not logged users
  // {}<a *ngIf="!userIsLogged" href="/login">Please Login</a>
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: ItemListComponent, canActivate: [UserService] },
  { path: 'login', component: LoginComponent, canActivate: [UserService] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
