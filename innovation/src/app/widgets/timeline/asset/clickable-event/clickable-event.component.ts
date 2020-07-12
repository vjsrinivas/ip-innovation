import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timeline-clickable-event',
  templateUrl: './clickable-event.component.html',
  styleUrls: ['./clickable-event.component.scss']
})
export class ClickableEventComponent implements OnInit {
  public eventInstance: any;

  constructor() { }

  ngOnInit() {
  }

  openModel() {
    console.log(this.eventInstance);
  }
}
