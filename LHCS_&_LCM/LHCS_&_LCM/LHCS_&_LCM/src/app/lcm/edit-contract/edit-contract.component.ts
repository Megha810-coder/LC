import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ContractorListComponent } from '../contractor-list/contractor-list.component';

@Component({
  selector: 'app-edit-contract',
  templateUrl: './edit-contract.component.html',
  styleUrls: ['./edit-contract.component.scss']
})
export class EditContractComponent implements OnInit {
  readonly APP_URL = "http://localhost:8080/ERP-LCM/";
  constructor(private http:HttpClient) { }

  // contract = new ContractorListComponent();
  cd_code:any;
  cd_title:any;
  cd_fname:any;
  cd_mname:any;
  cd_lname:any;
  cd_mobile_no:any;
  corr_line1:any;
  corr_line2:any;
  cd_marital_status:any;
  
  onClickSubmit(data,cd_id) {
    console.log(data);
   
    this.http.put(this.APP_URL +'labour/update_contract?cd_id='+cd_id, JSON.stringify(data,cd_id))
      .subscribe(res => {
             console.log('inside postmehtod of sub.function', res);//only objects
          });
          
      
  }

  ngOnInit() {
  }

}
