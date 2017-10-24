import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  name:string;
  email:string;
  pass:string;
  passConfirm:string;

  users: User[];


  onSubmit(name,email,pass,passConfirm)
  { 
    let valid = true;

    if(!name)
    {
      valid = false;
      alert('Missing name');
      console.log('missing name');

    }else if(name){
      console.log(name);
    }


    if(!email)
    {
      valid = false;
      alert('Missing email');
      console.log('missing email');

    }else if(email){
      console.log(email);
    }

    
    if(pass != passConfirm || !pass || !passConfirm)
    { 
      alert('Password not match');
      console.log ('pass not match');
      return false;

    }else if(this.pass === this.passConfirm){
      console.log('pass match');
    }

    if(valid == true)
    {
      alert('Register successful!');

     
    }
  }

    
    
  


  constructor(private dataService:DataService) { 
    this.dataService.getUsers().subscribe((users) => {
     this.users = users;
    });
  }

  

  ngOnInit() {
  }

}

interface User{
  username:string;
  password:string;
  email:string;
  
}