import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cont-labour',
  templateUrl: './cont-labour.component.html',
  styleUrls: ['./cont-labour.component.scss']
})
export class ContLabourComponent implements OnInit {



  myresponse: any;
 myresponse1 : any;


 constructor(private router: Router,private _http: HttpClient) { }
 readonly APP_URL ="http://localhost:8080/ERP-LCM/";

 getAllLabour(cd_id) {
  this._http.get(this.APP_URL + 'labour/lab_name?cd_id='+cd_id).subscribe(
      result1 => {

      console.log('hiii') ;
        this.myresponse1 = result1 ;
        console.log('this.myresponse1', this.myresponse1);
     },
      error => {
        console.log('Error occured', error);
      }
  );
  }
  getShiftOneLabour(cd_id) {

    this._http.get(this.APP_URL + 'labour/Shift_one?cd_id='+cd_id).subscribe(
        result1 => {
  
        console.log('hiii') ;
          this.myresponse1 = result1 ;
          console.log('this.myresponse1', this.myresponse1);
       },
        error => {
          console.log('Error occured', error);
        }
    );
    }

    getShiftTwoLabour(cd_id) {

      this._http.get(this.APP_URL + 'labour/Shift_two?cd_id='+cd_id).subscribe(
          result1 => {
    
          console.log('hiii') ;
            this.myresponse1 = result1 ;
            console.log('this.myresponse1', this.myresponse1);
         },
          error => {
            console.log('Error occured', error);
          }
      );
      }

      getShiftThreeLabour(cd_id) {

        this._http.get(this.APP_URL + 'labour/Shift_three?cd_id='+cd_id).subscribe(
            result1 => {
      
            console.log('hiii') ;
              this.myresponse1 = result1 ;
              console.log('this.myresponse1', this.myresponse1);
           },
            error => {
              console.log('Error occured', error);
            }
        );
        }
    
    
//  getAllContractor() {
  
  
//    this._http.get(this.APP_URL + 'labour/mng_contract').subscribe(
//      result => {

//        console.log('hiii') ;
//        this.myresponse = result ;
//        console.log('this.myresponse', this.myresponse);
//      },
//      error => {
//        console.log('Error occured', error);
//      }
//    ;
//  }
  ngOnInit() {
    this._http.get(this.APP_URL + 'labour/mng_contract').subscribe(
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