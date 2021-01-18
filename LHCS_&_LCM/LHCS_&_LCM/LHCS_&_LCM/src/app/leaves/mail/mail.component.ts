import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  myresponse: any;
  http: any;
  constructor(private router: Router,private _http: HttpClient) { }
  readonly APP_URL = 'http://localhost:8082/ERP-Company/';

  getMail() {
       this._http.get(this.APP_URL + 'labour/mail_ehs').subscribe(
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
  
     mail(data) {
      this._http.post(this.APP_URL +'mail/maill', JSON.stringify(data))
        .subscribe(res => {
               console.log('inside postmehtod of sub.function', res);//only objects
            })
        
    }
  ngOnInit() {
  }

}
