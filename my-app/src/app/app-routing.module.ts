import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent} from './components/post/post.component';
import { DigitalComponent} from './components/digital/digital.component';
import { PhotoComponent} from './components/photo/photo.component';
import { TodoComponent} from './components/todo/todo.component';
import { DrawComponent } from './components/draw/draw.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: 'Literature', component: PostComponent },
  { path: 'Digital', component: DigitalComponent },
  { path: 'Photo', component: PhotoComponent },
  { path: 'ToDo', component: TodoComponent },
  { path: 'Draw', component: DrawComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Register' ,component: RegisterComponent},
  { path: 'Profile', component: ProfileComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }