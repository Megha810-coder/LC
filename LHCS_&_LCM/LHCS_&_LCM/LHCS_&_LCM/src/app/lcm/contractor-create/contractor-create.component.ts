import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { UserService } from '../../user.service';
import { User } from '../../user';
@Component({
  selector: 'app-contractor-create',
  templateUrl: './contractor-create.component.html',
  styleUrls: ['./contractor-create.component.scss']
})
export class ContractorCreateComponent implements OnInit {

  cd_code:any;
  cd_title:any;
  cd_fname:any;
  cd_mname:any;
  cd_lname:any;
  cd_mobile_no:any;
  corr_line1:any;
  corr_line2:any;
  cd_marital_status:any;
  json_data:any;
  myresponse:any;
  myresponse2:any;
  value:boolean=false;
  private user:User;
  constructor(private http: HttpClient,private userService:UserService) { }
  readonly APP_URL = "http://localhost:8080/ERP-LCM/";
  ngOnInit() {
    this.user=this.userService.getter();
    this.http.get(this.APP_URL + 'labour/con_code').subscribe(
      result => {
        console.log('hiii');
       
        this.myresponse = result ;
        // this.value=!this.value;
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
  // console.log(data);
 
  // this.http.post(this.APP_URL +'labour/save_contract', JSON.stringify(data))
  //   .subscribe(res => {
  //          console.log('inside postmehtod of sub.function', res);//only objects
  //       })

    //     this.http.post(this.APP_URL + 'labour/update_contract?cd_id='+cd_id,JSON.stringify(data,cd_id))
    // .subscribe(res1=>{
    //   console.log('inside postmethod of sub.function', res1);
    // })
    
if(this.user.cd_id==undefined){
  this.userService.createContractor(this.user).subscribe((user)=>{
    console.log(user);
  },(error)=>{
    console.log(error);
  });

}
else{
 this.userService.updateContractor(this.user).subscribe((user)=>{
   console.log(user);
 },(error)=>{
  console.log(error);
 });
}

}




}
