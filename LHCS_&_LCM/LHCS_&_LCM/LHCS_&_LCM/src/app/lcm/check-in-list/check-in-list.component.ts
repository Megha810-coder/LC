import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ExcelServicesService } from '../../excel-services.service';
import { Observable } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-check-in-list',
  templateUrl: './check-in-list.component.html',
  styleUrls: ['./check-in-list.component.scss']
})
export class CheckInListComponent implements OnInit {
  myresponse: any;
  myresponse1:any;
  excel=[];

  constructor(private excelService:ExcelServicesService,private router: Router,private _http: HttpClient,private modalService: NgbModal) {
    // this.getJSON().subscribe(data => {  
    //   data.forEach(row => {  
    //     this.excel.push(row);  
    //   });  
    // });

 
   }
    readonly APP_URL = "http://localhost:8080/ERP-LCM/";
 
    arrayBuffer :any;
    file:File;
    files: EventTarget;

  ngOnInit() {
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
  DateValue(id){
    console.log(id);
  this._http.get(this.APP_URL + 'labour/Check_out_time?lab_check_id='+id).subscribe(
    result1 => {
      console.log('DONEEE');
      this.myresponse1 = result1 ;
      console.log('this.myresponse1', this.myresponse1);
    },
    error => {
      console.log('Error occured', error);
    }
  );
 
 }
//  exportAsXLSX():void {  
//   this.excelService.exportAsExcelFile(this.excel, 'Attedance');  
// }  

//  public getJSON(): Observable<any> {  
//     return  this._http.get(this.APP_URL + 'labour/mng_checkin');  
//  }

exportAsXLSX(){
    this._http.get(this.APP_URL+'labour/export_checkin').subscribe(
      result => {
        console.log('checkin' );
        this.myresponse = result ;
        console.log('this.myresponse', this.myresponse);
      },
      error => {
        console.log('Error occured', error);
      }
    ); 
}
 closeResult: string;

 open(content) {
   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
   }, (reason) => {
     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });
 }

 private getDismissReason(reason: any): string {
   if (reason === ModalDismissReasons.ESC) {
     return 'by pressing ESC';
   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     return 'by clicking on a backdrop';
   } else {
     return  `with: ${reason}`;
   }
 }

//   incomingfile($event)
//   {
//      this.file = event.target.files[0];
//  //   //let files: any = e.target.files[0]; 
//   }

Upload(){
  let fileReader = new FileReader();
  fileReader.onload = (e) =>{
    this.arrayBuffer = fileReader.result;
    var data = new Uint8Array(this.arrayBuffer);
    var arr = new Array();
    for(var i=0 ; i!=data.length ;i++)
    arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");

    var workbook = XLSX.read(bstr , {type:"binary"});
    var first_sheet_name = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[first_sheet_name];
    var value =XLSX.utils.sheet_to_json(worksheet,{raw:true});
    console.log(value);
    this._http.post(this.APP_URL +'labour/import_check_in',value)
    .subscribe(res => {
           console.log("Done");//only objects
          
        })
    
  }
  fileReader.readAsArrayBuffer(this.file);
}

}
