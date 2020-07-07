import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  currentStickers = [1,2,3,4,5];

  // Schema Example for events (will be loaded into by MongoDB)
  // Dates will be Date type for now but might changed to Timestamp when migrating to mongodb
  events = [
    {'name': 'Introduction into AI',
     'date': new Date('9/1/2020 12:30 PM EST'), //might change later based on mongodb datatype (timestamp), but will need to convert timestamp -> Date -> string
     'description': 'Lorem espum lorem ermoejioh osifj asiofa sfijas oifjas iofj',
     'type': 'normal',
     'presenters': [{'name': 'John Smith', 'avatar': '../../../assets/person1.jpg'}, {'name':'Aria Sansens', 'avatar': '../../../assets/person3.jpg'}],
     'connection_type': 'webex',
     'badges': [{'name':'Blackhole Badge', 'src':'../../../assets/blackhole.png'}],
     'link': 'www.example.com'
    },
    {'name': 'Introduction into AI (Part 2)',
     'date': new Date('9/1/2020 2:00 PM EST'), //might change later based on mongodb datatype (timestamp), but will need to convert timestamp -> Date -> string
     'description': 'Lorem espum lorem ermoejioh osifj asiofa sfijas oifjas iofj',
     'type': 'normal',
     'presenters': [{'name': 'John Smith', 'avatar': 'innovation/src/assets/person2.jpg'}, {'name':'Aria Sansens', 'avatar': 'https://via.placeholder.com/100x100'}],
     'connection_type': 'vr',
     'link': 'www.example2.com'
    },
    {'name': 'Introduction into AI',
     'date': new Date('9/1/2020 4:30 PM EST'), //might change later based on mongodb datatype (timestamp), but will need to convert timestamp -> Date -> string
     'description': 'Lorem espum lorem ermoejioh osifj asiofa sfijas oifjas iofj',
     'type': 'normal',
     'presenters': [{'name': 'John Smith', 'avatar': 'https://via.placeholder.com/100x100'}, {'name':'Aria Sansens', 'avatar': 'https://via.placeholder.com/100x100'}],
     'connection_type': 'webex',
     'link': 'www.example3.com'
    }
  ]

  ngOnInit() {
  }

}
