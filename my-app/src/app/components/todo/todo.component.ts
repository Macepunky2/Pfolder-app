import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  items: string [] = [
    'programar asd',
    'aprender asd',
    'aprender2'
  ]

  constructor() { }

  ngOnInit() {
  }

}
