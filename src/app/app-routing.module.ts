import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateblogpostComponent } from './createblogpost/createblogpost.component';
import {BlogpostFullviewComponent} from "./blogpost-fullview/blogpost-fullview.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BlogpostPanelListComponent} from "./blogpost-panel-list/blogpost-panel-list.component";
import {SearchListComponent} from './search-list/search-list.component';
import {LogoutComponent} from './logout/logout.component';
import { RouteguardService } from './service/routeguard.service';
import { MyPostsComponent } from './my-posts/my-posts.component';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createpost', component: CreateblogpostComponent, canActivate: [RouteguardService]},
  {path: 'fullPost/:id', component: BlogpostFullviewComponent},
  {path: 'home', component: DashboardComponent},
  {path: '', component: DashboardComponent},
  {path: 'list', component: BlogpostPanelListComponent},
  {path: 'search/:tag', component: SearchListComponent},
  {path: 'myPosts', component: MyPostsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
