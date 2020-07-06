import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

export interface ForumEvent{
  name: string
  date: Date | string | number
  description?: string
  type?: string
  presenters?: {name: string, avatar?: string}[]
  connection_type?: string
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

  openDialog(): void {

    this.eventinfo = {
      name: this.eventjson.name,
      date: this.eventjson.date,
      description: this.eventjson.description
    }


    const dialogRef = this.dialog.open(EventDialogBox,{
      width: '250px',
      data: {name: 'Intro to AI', date: Date.now(), description: 'Lorem espum lorem ermoejioh osifj asiofa sfijas oifjas iofj'}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog done')
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