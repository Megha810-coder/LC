import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-check-in-create',
  templateUrl: './check-in-create.component.html',
  styleUrls: ['./check-in-create.component.scss']
})
export class CheckInCreateComponent implements OnInit {
  lab_name:any;
  lab_department:any;
  lab_Shift:any;  
  myresponse: any;
  mng_Department:any;
  mng_Shift:any;
  mng_LabourName: any;
  myresponse2:any;
  myresponse1:any;
  myresponse3:any;

  constructor(private router: Router,private _http: HttpClient, private http: HttpClient) { }

  readonly APP_URL2 = "http://localhost:8080/ERP-LCM/";
 
  ngOnInit() {
  }
  

  register(lab_name,lab_department,lab_Shift) {
    console.log(lab_department);
    this.http.post(this.APP_URL2+"?lab_department="+lab_department,+"?lab_Shift="+lab_Shift)
    .subscribe(function(){
     console.log(lab_department,lab_Shift);
    });
}
onClickSubmit(data) {
  console.log(data);
   this._http.post(this.APP_URL2 + 'labour/save_labCheck', JSON.stringify(data))
     .subscribe(res => {
            console.log('inside postmehtod of sub.function', res);//only objects
         })
  
 }

 OnChange(){
  this._http.get(this.APP_URL2 + 'labour/lab_name1').subscribe(
    result => {
      console.log('megha') ;
      this.myresponse = result ;
      console.log('this.myresponse', this.myresponse);
    },
    error => {
      console.log('Error occured', error);
  });
 }

 OnChange1(){
   this._http.get(this.APP_URL2 + 'labour/dept_name').subscribe(
     result1 => {
       console.log('hiii') ;
       this.myresponse1 = result1 ;
       console.log('this.myresponse1', this.myresponse1);
     },
     error => {
       console.log('Error occured', error);
   });
  }

  OnChange2(){
   this._http.get(this.APP_URL2 + 'labour/shift').subscribe(
     result2 => {      
      console.log('hiii') ;
       this.myresponse2 = result2 ;
       console.log('this.myresponse2', this.myresponse2);
     },
     error => {
       console.log('Error occured', error);
   });
  }

  OnChange3(){
    this._http.get(this.APP_URL2 + 'labour/con').subscribe(
      result3 => {      
       console.log('hiii') ;
        this.myresponse3 = result3 ;
        console.log('this.myresponse3', this.myresponse3);
      },
      error => {
        console.log('Error occured', error);
    });
   }


@ViewChild('infoModal') public infoModal: ModalDirective;
}
