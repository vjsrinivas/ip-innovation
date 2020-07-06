import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timeline-date',
  templateUrl: './timeline-date.component.html',
  styleUrls: ['./timeline-date.component.scss']
})
export class TimelineDateComponent implements OnInit {

  @Input()
  date: string;

  constructor() { }

  ngOnInit() {
    console.log(this.date);
  }

}
