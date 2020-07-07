import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  userData: any = [
    {name: "Vicki Tang", badge1: false, badge2: false, badge3: false, badge4: false, badge5: false, badge6: false, badge7: false, badge8: false, badge9: false, badge10: false},
    {name: "Vijay Rajagopal", badge1: false, badge2: false, badge3: false, badge4: false, badge5: false, badge6: false, badge7: false, badge8: false, badge9: false, badge10: false},
    {name: "Vishal Aiely", badge1: false, badge2: false, badge3: false, badge4: false, badge5: false, badge6: false, badge7: false, badge8: false, badge9: false, badge10: false},
    {name: "Khiliel Bullock", badge1: false, badge2: false, badge3: false, badge4: false, badge5: false, badge6: false, badge7: false, badge8: false, badge9: false, badge10: false},
    {name: "Tiara Jefferson", badge1: false, badge2: false, badge3: false, badge4: false, badge5: false, badge6: false, badge7: false, badge8: false, badge9: false, badge10: false},
  ]

  constructor() { 
    console.log(this.userData);
    
  }

  tcode : string;
  submit() {
    console.log("Searched name: " + this.tcode);
  }

  ngOnInit() {
  }




}
