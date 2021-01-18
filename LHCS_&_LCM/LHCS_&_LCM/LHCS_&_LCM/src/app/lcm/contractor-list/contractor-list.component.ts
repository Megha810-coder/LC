import { Component, OnInit ,ViewChild, Input} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { ContractorCreateComponent } from '../../hc/contractor-create/contractor-create.component';
import { ExcelServicesService } from '../../excel-services.service';
import { Observable } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as XLSX from 'ts-xlsx';
import { UserService } from '../../user.service';
import { User } from '../../user';

@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.component.html',
  styleUrls: ['./contractor-list.component.scss']
})
export class ContractorListComponent implements OnInit {
 myresponse: any;
 myresponse1: any;
 cd_id: any;
 cd_code:any;
 excel=[];
 // employees = new Array<Employee>();
  title = 'Spring Mvc Angular Tutorial';
 // radioModel: string = 'Month';
 constructor(private userService:UserService, private excelService:ExcelServicesService,private router: Router,private _http: HttpClient,private modalService: NgbModal) {
  this.getJSON().subscribe(data => {  
    data.forEach(row => {  
      this.excel.push(row);  
    });  
   });
  }
 readonly APP_URL = "http://localhost:8080/ERP-LCM/";



//  getAllContractorView(cd_id) {
  
  
//   this._http.get(this.APP_URL + 'labour/view_con_labour?cd_id='+cd_id).subscribe(
//    result1 => {

//         console.log('hiii') ;
//       this.myresponse1 = result1 ;
//       console.log('this.myresponse1', this.myresponse1);
//     },
//      error => {      console.log('Error occured', error);
//       }
//   );
//  }

//  getAllContractorDelete(cd_id)
//  {
    
//   this._http.get(this.APP_URL + 'labour/delete_Contractor?cd_id='+cd_id).subscribe(
//     result1 => {
 
//          console.log('hiii') ;
//        this.myresponse1 = result1 ;
//        console.log('this.myresponse1', this.myresponse1);
//      },
//       error => {      console.log('Error occured', error);
//        }
//    );
//   }
 
//   getAllContractorView(cd_id) {
  
  
//   this._http.get(this.APP_URL + 'labour/view_con_labour?id= '+cd_id).subscribe(
//    result => {

//         console.log('hiii') ;
//       this.myresponse1 = result ;
//       console.log('this.myresponse1', this.myresponse1);
//     },
//      error => {      console.log('Error occured', error);
//       }
//   );
//  }

getAllContractorUpdate(cd_id)
{
   
  cd_code: this.cd_code,

 this._http.get(this.APP_URL + 'labour/edit_Contract?cd_id='+cd_id).subscribe(
   result1 => {

        console.log('hiii') ;
      this.myresponse1 = result1 ;
      console.log('this.myresponse1', this.myresponse1);
    },
     error => {      console.log('Error occured', error);
      }
  );
 }
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

 exportAsXLSX():void {  
  this.excelService.exportAsExcelFile(this.excel, 'Contractor');  
}  

 public getJSON(): Observable<any> {  
    return  this._http.get(this.APP_URL + 'labour/mng_contract');  
 }

 arrayBuffer :any;
 file:File;
 files: EventTarget;

  e:any;

//   incomingfile($event)
//  {
//     this.file = event.target.files[0];
//  }

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
    this._http.post(this.APP_URL +'labour/import_con',value)
    .subscribe(res => {
           console.log("Done");//only objects
        })
  }
  fileReader.readAsArrayBuffer(this.file);
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

 updateContractor(user){
  this.userService.setter(user);
  this.router.navigate(['/lcm/contractor-create']);
}


save()
{
  let user =new User();
  this.userService.setter(user);
  this.router.navigate(['/lcm/contractor-create']);
}

viewContractor(user){
  this.userService.setter(user);
  this.router.navigate(['/lcm/contractor-view']);
}


 @ViewChild('infoModal') public infoModal: ModalDirective;
}
