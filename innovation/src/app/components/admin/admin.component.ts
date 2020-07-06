import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  userData: any = [
    {name: "Vicki Tang", badge1:" ", badge2: " ", badge3: " ", badge4: " ", badge5: " ", badge6: " ", badge7: " ", badge8: " ", badge9: " ", badge10: " "},
    {name: "Vijay Rajagopal", badge1:" ", badge2: " ", badge3: " ", badge4: " ", badge5: " ", badge6: " ", badge7: " ", badge8: " ", badge9: " ", badge10: " "},
    {name: "Vishal Aiely", badge1:" ", badge2: " ", badge3: " ", badge4: " ", badge5: " ", badge6: " ", badge7: " ", badge8: " ", badge9: " ", badge10: " "},
    {name: "Khiliel Bullock", badge1:" ", badge2: " ", badge3: " ", badge4: " ", badge5: " ", badge6: " ", badge7: " ", badge8: " ", badge9: " ", badge10: " "},
    {name: "Tiara Jefferson", badge1:" ", badge2: " ", badge3: " ", badge4: " ", badge5: " ", badge6: " ", badge7: " ", badge8: " ", badge9: " ", badge10: " "},
  
  ]

  constructor() { 
    console.log(this.userData);
  }

  

  ngOnInit() {
  }




}
