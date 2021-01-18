import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../user';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-prerequisite',
  templateUrl: './prerequisite.component.html',
  styleUrls: ['./prerequisite.component.scss']
})
export class PrerequisiteComponent implements OnInit {
  myresponse: any;


  private user:User[];

  constructor(private userService: UserService,private router: Router,private _http: HttpClient,private modalService: NgbModal) {
 
   }
    readonly APP_URL = "http://localhost:8080/ERP-LCM/";

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

  ngOnInit(){
    this._http.get(this.APP_URL + 'labour/mng_prerequisite').subscribe(
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

      updateUser(user){
         this.userService.setter(user);
         this.router.navigate(['/lcm/prerequisite-create']);
       }

       save()
       {
         let user =new User();
         this.userService.setter(user);
         this.router.navigate(['/lcm/prerequisite-create']);
       }

       viewUser(user){
        this.userService.setter(user);
        this.router.navigate(['/lcm/Lab_list1']);
      }

}
