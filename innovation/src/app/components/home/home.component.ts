import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  currentStickers = [1,2,3,4,5];

  // Schemea Example for events (will be loaded into by MongoDB)
  // Dates will be Date type for now but might changed to Timestamp when migrating to mongodb
  _tmp_date = new Date('9/1/2020');
  events = [
    {'name': 'Introduction into AI',
     'date': this._tmp_date, //might change later based on mongodb datatype (timestamp), but will need to convert timestamp -> Date -> string
     'description': 'Lorem espum lorem ermoejioh osifj asiofa sfijas oifjas iofj',
     'type': 'normal',
     'presenters': [{'name': 'John Smith', 'avatar': 'https://via.placeholder.com/100x100'}, {'name':'Aria Sansens', 'avatar': 'https://via.placeholder.com/100x100'}],
     'connection_type': 'webex',
    }
  ]

  ngOnInit() {
  }

}
