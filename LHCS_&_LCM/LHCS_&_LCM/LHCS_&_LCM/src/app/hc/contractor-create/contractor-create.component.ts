import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ModalDirective} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-contractor-create',
  templateUrl: './contractor-create.component.html',
  styleUrls: ['./contractor-create.component.scss']
})
export class ContractorCreateComponent implements OnInit {
  cd_code:any;
  cd_fname:any;
  cd_mname:any;
  cd_lname:any;
  cd_mobile_no:any;
  corr_line1:any;
  corr_line2:any;
  json_data:any;

  constructor(private http: HttpClient) { }
  readonly APP_URL = "http://localhost:8005/ERP-Company/";
  ngOnInit() {
  }
  onClickSubmit(data) {

    console.log(data);
   
    this.http.post(this.APP_URL +'labour/save_contract', JSON.stringify(data))
      .subscribe(res => {
             console.log('inside postmehtod of sub.function', res);//only objects
          })
      
  }

  @ViewChild('infoModal') public infoModal: ModalDirective;
}
