import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostComponent } from './components/post/post.component';
import { DigitalComponent } from './components/digital/digital.component';
import { PhotoComponent } from './components/photo/photo.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule} from '@angular/forms';
import { DrawComponent } from './components/draw/draw.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidebarComponent,
    PostComponent,
    DigitalComponent,
    PhotoComponent,
    TodoComponent,
    DrawComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
