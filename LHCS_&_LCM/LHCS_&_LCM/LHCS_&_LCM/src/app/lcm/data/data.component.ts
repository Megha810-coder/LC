import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  readonly APP_URL = "http://localhost:8080/ERP-LCM/";
  myresponse:any;
  constructor(private router: Router,private _http: HttpClient,private modalService: NgbModal) { }

  ngOnInit() {
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

  daily(){
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

  weekly(){

  }

  to:any;
  from:any;

  Import(to,from){
    console.log(to);
    console.log(from);
    var value={"to1":to,"from1":from};
    this._http.get(this.APP_URL +'labour/export_weekly')
    .subscribe( result => {
      console.log('checkinweekly' );
      this.myresponse = result ;
      console.log('this.myresponse', this.myresponse);
    },
    error => {
      console.log('Error occured', error);
    })
  }

}
