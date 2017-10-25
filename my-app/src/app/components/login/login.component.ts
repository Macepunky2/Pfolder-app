import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name:string;
  email:string;
  pass:string;
  passConfirm:string;

  users : User[];

  constructor(private dataService:DataService) { 

  }

  ngOnInit() {
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
   
  });

  }
}

