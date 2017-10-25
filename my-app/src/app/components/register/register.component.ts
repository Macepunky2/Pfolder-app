import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../user';

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


  onSubmit(username,email,pass,passConfirm)
  { 
    let valid = true;

    if(!username)
    {
      valid = false;
      alert('Missing name');


    }else if(username){
      console.log(username);
    }


    if(!email)
    {
      valid = false;
      alert('Missing email');


    }else if(email){
      console.log(email);
    }

    
    if(pass != passConfirm || !pass || !passConfirm)
    { 
      alert('Password not match');
      return false;

    }else if(this.pass === this.passConfirm){
      console.log('pass match');
    }

    if(valid == true)

    {
      alert('Register successful!');

      
      this.users.push
      ({
          username: username,
          email: email,
          password: pass
      });

      return false;

      

     
    }
  }

    
    
  


  constructor(private dataService:DataService) { 

  }

  

  ngOnInit() {
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
     });
  }

}
