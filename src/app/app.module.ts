import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogpostPanelComponent } from './blogpost-panel/blogpost-panel.component';
import { BlogpostFullviewComponent } from './blogpost-fullview/blogpost-fullview.component';
import { TagbarComponent } from './tagbar/tagbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BlogpostPanelListComponent } from './blogpost-panel-list/blogpost-panel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostPanelComponent,
    BlogpostFullviewComponent,
    TagbarComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    BlogpostPanelListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
