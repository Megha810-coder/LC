import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.scss']
})
export class ViewContractComponent implements OnInit {

  constructor(private router: Router,private _http: HttpClient) { }
  readonly APP_URL = "http://localhost:8080/ERP-LCM/";
  myresponse1:any;
  cd_id: any;

  // getAllContractorView(cd_id) {
  
  
  //   this._http.get(this.APP_URL + 'labour/view_con_labour?cd_id='+cd_id).subscribe(
  //    result1 => {
  
  //         console.log('hiii') ;
  //       this.myresponse1 = result1 ;
  //       console.log('this.myresponse1', this.myresponse1);
  //     },
  //      error => {      console.log('Error occured', error);
  //       }
  //   );
  //  }
  ngOnInit() {
  }

}
