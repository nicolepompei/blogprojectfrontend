import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {BlogpostFullviewComponent} from './blogpost-fullview/blogpost-fullview.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BlogpostPanelListComponent} from './blogpost-panel-list/blogpost-panel-list.component';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'fullPost/:id', component: BlogpostFullviewComponent},
  {path: 'home', component: DashboardComponent},
  {path: '', component: DashboardComponent},
  {path: 'list', component: BlogpostPanelListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
