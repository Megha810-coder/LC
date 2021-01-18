import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-labour-create',
  templateUrl: './labour-create.component.html',
  styleUrls: ['./labour-create.component.scss']
})
export class LabourCreateComponent implements OnInit {
  lab_code:any;
  lab_fname:any;
  lab_mname:any;
  lab_lname:any;
  lab_mobile_no:any;
  json_data:any;

  constructor(private http: HttpClient) { }
  readonly APP_URL = "http://localhost:8005/ERP-Company/";
  ngOnInit() {
     }
     onClickSubmit(data) {
      console.log(data);
   
    this.http.post(this.APP_URL +'labour/save_labour', JSON.stringify(data))
      .subscribe(res => {
             console.log('inside postmehtod of sub.function', res);//only objects
          })
      
  }
}
