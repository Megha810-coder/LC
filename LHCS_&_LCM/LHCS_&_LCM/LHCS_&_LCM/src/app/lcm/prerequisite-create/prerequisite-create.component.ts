import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {UserService} from '../../user.service';
import {User} from '../../user';

@Component({
  selector: 'app-prerequisite-create',
  templateUrl: './prerequisite-create.component.html',
  styleUrls: ['./prerequisite-create.component.scss']
})
export class PrerequisiteCreateComponent implements OnInit {
  readonly APP_URL ="http://localhost:8080/ERP-LCM/";
  myresponse: any;
  mng_Shift:any;
  myresponse1:any;
  myresponse2:any;

  private user:User;
  constructor(private _userService:UserService,private router: Router,private _http: HttpClient) { }

  ngOnInit() {
    this._http.get(this.APP_URL + 'labour/mng_Department').subscribe(
      result => {
        this.myresponse = result ;
        console.log('this.myresponse', this.myresponse);
      },
      error => {
        console.log('Error occured', error);
      }
    );
     this._http.get(this.APP_URL + 'labour/mng_ShiftStatus').subscribe(
      result => {
        this.mng_Shift = result ;
        console.log('this.myresponse', this.mng_Shift);
      },
      error => {
        console.log('Error occured', error);
      }
    );

    this.user = this._userService.getter();

    // this.alerts.setMessage('Details saved successfully!','success');
   
  }
 


   onClickSubmit() {
    if(this.user.hr_req_id==undefined){
      this._userService.createUser(this.user).subscribe((user)=>{
        console.log(user);
      },(error)=>{
        console.log(error);
      });
    //  this._http.post(this.APP_URL + 'labour/save_prerequisite', JSON.stringify(data))
    //    .subscribe(res => {
    //           console.log('inside postmehtod of sub.function', res);//only objects
    //        })
          }
          else{
            this._userService.updateUser(this.user).subscribe((user)=>{
              console.log(user);
            },(error)=>{
              console.log(error);
            });
          }
   }

   OnChange1(){
    this._http.get(this.APP_URL + 'labour/dept_name').subscribe(
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
    this._http.get(this.APP_URL + 'labour/shift').subscribe(
      result2 => {      
       console.log('hiii') ;
        this.myresponse2 = result2 ;
        console.log('this.myresponse2', this.myresponse2);
      },
      error => {
        console.log('Error occured', error);
    });
   }
 
   @ViewChild('infoModal') public infoModal: ModalDirective;
}

