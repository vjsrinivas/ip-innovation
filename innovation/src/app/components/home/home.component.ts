import { Component, OnInit } from '@angular/core';
import {MongoFunctionsService} from '../../mongo-functions.service';
import { ForumEvent } from "../event-box/event-box.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: ForumEvent[]

  constructor(private mongo: MongoFunctionsService) {
  }

  currentStickers = [1,2,3,4,5];

  // Schema Example for events (will be loaded into by MongoDB)
  // Dates will be Date type for now but might changed to Timestamp when migrating to mongodb


  ngOnInit() {
    this.mongo.getEvents().subscribe((data: ForumEvent[]) => {
      console.log(data)
      this.events = data
    })
  }

  // addItem() {
  //   //this.mongo.addEvent(testEvent);
  //   this.mongo.getEvents();
  // }
}
