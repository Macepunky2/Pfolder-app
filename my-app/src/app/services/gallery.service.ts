import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';




@Injectable()
export class GalleryService {

  constructor(private http: Http) { }

  getAll()
  {
    return this.http
    .get('https://jsonplaceholder.typicode.com/photos')
    .map(data => data.json());
  }

  get(id: number) {
    return this.http
      .get('https://jsonplaceholder.typicode.com/photos/' + id)
      .map(data => data.json());
  }
}
