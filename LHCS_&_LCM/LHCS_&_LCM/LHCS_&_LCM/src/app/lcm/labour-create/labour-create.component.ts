import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import {UserService} from '../../user.service';
import { User } from '../../user';
import {ModalDirective} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-labour-create',
  templateUrl: './labour-create.component.html',
  styleUrls: ['./labour-create.component.scss']
})
export class LabourCreateComponent implements OnInit {

  lab_code:any;
  
  lab_title:any;
  lab_fname:any;
  lab_mname:any;
  lab_lname:any;
  lab_mobile_no:any;
  corr_line1:any;
  corr_line2:any;
  lab_marital_status:any;
  json_data:any;
  value:boolean=false;
  myresponse1:any;
  myresponse2:any;
  myresponse:any;
  private user:User;
  
  constructor(private _userService: UserService,private http: HttpClient) { }
  readonly APP_URL = "http://localhost:8080/ERP-LCM/";
  ngOnInit() {
    this.user = this._userService.getter();
    this.http.get(this.APP_URL + 'labour/lab_code').subscribe(
      result => {
        console.log('hiii');
       
        this.myresponse = result;
        this.value=!this.value;
        console.log('this.myresponse', this.myresponse);
      },
      error => {
        console.log('Error occured', error);
      }
    );

    this.http.get(this.APP_URL + 'labour/lab_city').subscribe(
      result2 => {
        console.log('hiii');
       
        this.myresponse2 = result2;
        this.value=!this.value;
        console.log('this.myresponse2', this.myresponse2);
      },
      error => {
        console.log('Error occured', error);
      }
    );

    
  }
 
  onClickSubmit() {
      // this.http.post(this.APP_URL +'labour/save_labour', JSON.stringify(data))
      // .subscribe(res => {
      //      console.log('inside postmehtod of sub.function', res);//only objects
      //   })
      if(this.user.lab_id==undefined){
        this._userService.createLabour(this.user).subscribe((user)=>{
          console.log(user);
        },(error)=>{
          console.log(error);
        });
            }
            else{
              this._userService.updateLabour(this.user).subscribe((user)=>{
                console.log(user);
              },(error)=>{
                console.log(error);
              });
            }
  
    
}

OnChange(){
  this.http.get(this.APP_URL + 'labour/con_name').subscribe(
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

@ViewChild('infoModal') public infoModal: ModalDirective;

}
