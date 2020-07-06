import { Component, OnInit, Input, Inject, ViewContainerRef } from '@angular/core';
import { TimelineServiceService } from './timeline-service.service';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input()
  eventList: []
  private service: TimelineServiceService;

  constructor(@Inject(TimelineServiceService) service, @Inject(ViewContainerRef) viewContainerRef) {
    this.service = service;
    this.service.setRootViewContainerRef(viewContainerRef)

  }

  ngOnInit() {
    // read through event struct and generate html based on the event!
    let _days = [];
    let _time_between_events = []
    let _prevDate: Date = undefined;
    this.eventList.forEach(event => {
      const _date: Date = event['date']
      if(_prevDate != undefined) {
        const diff = _date.getTime() - _prevDate.getTime();
        _time_between_events.push(diff);
      } else {
        _time_between_events.push(0)
      }

      const _dateBuild = _date.getMonth() + '/' + _date.getDate() + '/' + _date.getFullYear();
      _days.push(_dateBuild);
      _prevDate = _date; 
    });

    console.log(_days);
    console.log(_time_between_events);
    let prevDay = '';
    
    for (let i = 0; i < _time_between_events.length; i++) {
      const _time = _time_between_events[i];
      
      if(prevDay != '') {
        if(prevDay != _days[i]) {
          this.service.addDateComponent(_days[i]);
        }
      } else {
        this.service.addDateComponent(_days[i]);
      }
      
      this.service.addClickableComponent(this.eventList[i]);
      // Time in milliseconds
      // If time difference is bigger than 2 hours and less than 4 hours:
      if(_time >= 3600000*2 && _time <= 3600000*4) {
        this.service.addBarComponent();
      } else if(_time >= 3600000*4) {
        this.service.addBarComponent();
        this.service.addBarComponent();
      }

      prevDay = _days[i];
    }

    this.service.addDateComponent('End of Conference');

  }

}
