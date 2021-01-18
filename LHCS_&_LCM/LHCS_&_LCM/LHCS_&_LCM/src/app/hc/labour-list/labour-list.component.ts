import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-labour-list',
  templateUrl: './labour-list.component.html',
  styleUrls: ['./labour-list.component.scss']
})
export class LabourListComponent implements OnInit {
  myresponse: any;
  // employees = new Array<Employee>();
   title = 'Spring Mvc Angular Tutorial';
  constructor(private _http: HttpClient) { }
  readonly APP_URL = 'http://localhost:8005/ERP-Company/';
  ngOnInit() {
    this._http.get(this.APP_URL + 'labour/mng_labour').subscribe(
      result => {
 
        console.log('hiii') ;
        this.myresponse = result ;
        console.log('this.myresponse', this.myresponse);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }
  getAllLabour() {
  
  
    this._http.get(this.APP_URL + 'labour/mng_labour').subscribe(
      result => {
 
        console.log('hiii') ;
        this.myresponse = result ;
        console.log('this.myresponse', this.myresponse);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }
}
