import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import * as moment from 'moment'

export interface ForumEvent{
  name: string
  date: Date | string | number
  description?: string
  type?: string
  presenters?: {name: string, avatar?: string}[]
  connection_type?: string
  badges?: {name:string, src:string}[]
  link?: string
}

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss']
})
export class EventBoxComponent implements OnInit {

  @Input() eventjson: any;

  eventinfo: ForumEvent

  constructor(public dialog: MatDialog) {  }

  public openDialog(): void {

    this.eventinfo = {
      name: this.eventjson.name,
      date: moment(this.eventjson.date).format('MM/DD h:mm a'),
      description: this.eventjson.description,
      presenters: this.eventjson.presenters,
      badges: this.eventjson.badges,
      link: this.eventjson.link
    }

    const dialogRef = this.dialog.open(EventDialogBox,{
      width: '600px',
      data: this.eventinfo
    })

    dialogRef.afterClosed().subscribe(result => {
    })
  }

  ngOnInit() {
  }


}

@Component({
  selector: 'event-dialog-box',
  templateUrl: 'event-dialog-box.html',
})
export class EventDialogBox{

  constructor(
    public dialogRef: MatDialogRef<EventDialogBox>,
    @Inject(MAT_DIALOG_DATA) public data: ForumEvent
  ){}

  onNoClick(): void {
    this.dialogRef.close()
  }
}