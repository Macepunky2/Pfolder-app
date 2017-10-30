import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) 
  { 
    console.log('data service connected...');
  }


  getUsers() : Observable<User[]>  //gets users from local json
  {
    return this.http.get('/json/users.json')
    .map(res => res.json());
  }
 

}

