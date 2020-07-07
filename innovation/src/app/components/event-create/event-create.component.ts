import { Component, OnInit } from '@angular/core';
import eventList from '../../../assets/eventList.json';
import {MongoFunctionsService} from '../../mongo-functions.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  constructor(private mongo: MongoFunctionsService) {
  }

  ngOnInit() {
  }

  generateEvents() {
    let _events = [];

    eventList.forEach(event => {
      const data = {
        name: event['name'],
        date: new Date(event['date']),
        description: event['description'],
        type: event['type'],
        presenters: event['presenters'],
        connection_type: event['connection_type'],
        link: event['link']
      };
      _events.push(data)
    });

    // delete stuff first:
    this.mongo.getEvents().subscribe(
      (oldEvents: any[]) => {
        
        if(oldEvents != null) {
          oldEvents.forEach(oldEvent => {
            if(oldEvent != null) {
              this.mongo.deleteEvent(oldEvent._id).subscribe(
                (data) => {console.log(data);}
              );
            }
          });
        }

        _events.forEach(event => {
          this.mongo.addEvent(event).subscribe(
            (res) => {console.log(res);}
          )
        });
      }, (err) => {
        console.log(err);
      }
    )
  }

}
