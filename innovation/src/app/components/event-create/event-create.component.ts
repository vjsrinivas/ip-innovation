import { Component, OnInit } from '@angular/core';
import eventList from '../../../assets/eventList.json';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  file:any;
  constructor() {
    console.log(eventList);
  }

  ngOnInit() {
  }

  generateEvents() {

  }

}
