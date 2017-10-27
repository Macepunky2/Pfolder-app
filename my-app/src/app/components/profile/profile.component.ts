import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgModel } from '@angular/forms'
import { User } from '../../user'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {

  users : User[];
  username: string;
  name: string;
  email:string;


  constructor(private dataService:DataService) { 
  }

  ngOnInit() {

    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
    console.log(this.users[0]);
    this.username = this.users[0].username;  
 
  });


  }

}
