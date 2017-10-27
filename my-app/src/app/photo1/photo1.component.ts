import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { GalleryService } from '../services/gallery.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { User } from '../user';

@Component({
  selector: 'app-photo1',
  templateUrl: './photo1.component.html',
  styleUrls: ['./photo1.component.scss']
})
export class Photo1Component implements OnInit {
  users: User[];

  photo: Photo
 
  constructor(private galleryService: GalleryService,private dataService: DataService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getPhoto(params['id']);
      
    });
   this.dataService.getUsers().subscribe((users) => {
    this.users = users; });
    
  }
  private getPhoto(id: number){
    this.galleryService.getPhoto(id).subscribe(photo => {
      this.photo = photo;
    });
  }

}
