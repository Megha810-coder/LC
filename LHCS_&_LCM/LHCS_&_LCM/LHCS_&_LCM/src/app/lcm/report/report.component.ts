import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  
  readonly APP_URL = "http://localhost:8080/ERP-LCM/";
  myresponse: any;
  myresponse1: any;
  myresponse2: any;
  myresponse3: any;
  myresponse4: any;
  myresponse5: any;
  myresponse6: any;
  myresponse7: any;
  myresponse8: any;
  myresponse9: any;

  constructor(private http: HttpClient) { }

  Contractor(){
    this.http.get(this.APP_URL + 'labour/Con_count').subscribe(
      result => {
       this.myresponse=result;
        console.log('this.myresponse',  this.myresponse);
     },
      error => {
        console.log('Error occured', error);
      }
  
    
    );
  }

  Labour(){
    this.http.get(this.APP_URL + 'labour/Lab_count').subscribe(
      result1 => {
       this.myresponse1=result1;
        console.log('this.myresponse1',  this.myresponse1);
     },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  Requirement()
  {
    this.http.get(this.APP_URL + 'labour/Hr_count').subscribe(
      result2 => {
       this.myresponse2=result2;
        console.log('this.myresponse2',  this.myresponse2);
     },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  check_in()
  {
    this.http.get(this.APP_URL + 'labour/check_in_count').subscribe(
      result3 => {
       this.myresponse3=result3;
        console.log('this.myresponse3',  this.myresponse3);
     },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  shift1()
  {
    this.http.get(this.APP_URL + 'labour/shift1').subscribe(
      result4 => {
       this.myresponse4=result4;
        console.log('this.myresponse4',  this.myresponse4);
     },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  shift2()
  {
    this.http.get(this.APP_URL + 'labour/shift2').subscribe(
      result5 => {
       this.myresponse5=result5;
        console.log('this.myresponse5',  this.myresponse5);
     },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  shift3()
  {
    this.http.get(this.APP_URL + 'labour/shift3').subscribe(
      result6 => {
       this.myresponse6=result6;
        console.log('this.myresponse6',  this.myresponse6);
     },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  week1()
  {
    this.http.get(this.APP_URL + 'labour/week').subscribe(
      result7 => {
       this.myresponse7=result7;
        console.log('this.myresponse7',  this.myresponse7);
     },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  month1()
  {
    this.http.get(this.APP_URL + 'labour/month').subscribe(
      result8 => {
       this.myresponse8=result8;
        console.log('this.myresponse8',  this.myresponse8);
     },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  year1()
  {
    this.http.get(this.APP_URL + 'labour/year').subscribe(
      result9 => {
       this.myresponse9=result9;
        console.log('this.myresponse9',  this.myresponse9);
     },
      error => {
        console.log('Error occured', error);
      }
    );
  }


  ngOnInit() {
  }

}
