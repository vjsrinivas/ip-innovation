import { Component, OnInit } from '@angular/core';
import { MongoFunctionsService } from '../../mongo-functions.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  term: string 

  userData: any = [
    {name: "Vicki Tang", badge1: false, badge2: false, badge3: false, badge4: false, badge5: false, badge6: false, badge7: false, badge8: false, badge9: false, badge10: false},
    {name: "Vijay Rajagopal", badge1: false, badge2: false, badge3: false, badge4: false, badge5: false, badge6: false, badge7: false, badge8: false, badge9: false, badge10: false},
    {name: "Vishal Aiely", badge1: false, badge2: false, badge3: false, badge4: false, badge5: false, badge6: false, badge7: false, badge8: false, badge9: false, badge10: false},
    {name: "Khiliel Bullock", badge1: false, badge2: false, badge3: false, badge4: false, badge5: false, badge6: false, badge7: false, badge8: false, badge9: false, badge10: false},
    {name: "Tiara Jefferson", badge1: false, badge2: false, badge3: false, badge4: false, badge5: false, badge6: false, badge7: false, badge8: false, badge9: false, badge10: false},
  ]

  constructor(private mongo: MongoFunctionsService) { 
    // console.log(this.userData);
    
  }

  tcode : string;
  submit() {
    console.log("Searched name: " + this.tcode);
  }

  // data = this.userData.name;
  myData: any;

  ngOnInit() {
    
    this.mongo.getUsers().subscribe((res: any) => {
      //alert("Success");
      this.myData = res; 
      // Where you find the array res.data or res.data.data
      console.log('res is ', res);
    },
    error => {
      alert("ERROR");
    });
  }
    
}


