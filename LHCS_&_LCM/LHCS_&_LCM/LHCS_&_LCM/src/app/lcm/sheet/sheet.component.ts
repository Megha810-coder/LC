import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {

  myresponse:any;

  constructor(private router: Router,private _http: HttpClient) { }

  readonly APP_URL = "http://localhost:8080/ERP-LCM/";

  ngOnInit() {
  }

  list(){
    this._http.get(this.APP_URL + 'labour/mng_checkin').subscribe(
      result => {

        console.log('hiii' );
        this.myresponse = result ;
        console.log('this.myresponse', this.myresponse);
      },
      error => {
        console.log('Error occured', error);
      }
    );

  }

}
