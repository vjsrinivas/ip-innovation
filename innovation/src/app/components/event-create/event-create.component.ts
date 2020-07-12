import { Component, OnInit } from '@angular/core';
import eventList from '../../../assets/eventList.json';
import userList from '../../../assets/userList.json';
import stickerList from '../../../assets/stickerList.json';
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

  generateUsers() {
    let _users = [];
    userList.forEach(user => {
      const data = {
        name: user['name'],
        badge1: user['badge1'],
        badge2: user['badge2'],
        badge3: user['badge3'],
        badge4: user['badge4'],
        badge5: user['badge5'],
        badge6: user['badge6'],
        badge7: user['badge7'],
        badge8: user['badge8'],
        badge9: user['badge9'],
        badge10: user['badge10'],
      };
      _users.push(data)
    });
    
    this.mongo.deleteUsers().subscribe(
      (val) => {
          _users.forEach(user => {
            console.log(user.name);
            this.mongo.saveUser(user).subscribe((val) => {
              console.log(val);
            }, (err2) => {console.log(err2)});
          });
      }, (err) => {
        console.log('err in mongo DeleteUser declaration: ', err);
      }
    );
  }

  generateStickers() {
    let _stickers = [];
    stickerList.forEach(sticker => {
      const data = {
        name:  sticker['name'],
        description: sticker['description'],
        image: sticker['image']
      };
      _stickers.push(data)
    });

    this.mongo.deleteStickers().subscribe(
      (val) => {
        _stickers.forEach(sticker => {
          this.mongo.setSticker(sticker).subscribe(
            (val2) => {console.log(val2)}
          );
        });
      }
    ) 
  }

}
