import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  userData: any = [
    {name: "Vicki", badge:"imaage1"},
    {name: "Vicki", badge:"image2"},
    {name: "Vicki", badge:"image3"},
    
  ]

  constructor() { 
    console.log(this.userData);
  }

  ngOnInit() {
  }




}
