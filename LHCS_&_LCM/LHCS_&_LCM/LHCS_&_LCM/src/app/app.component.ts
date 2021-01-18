import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  // myresponse: any;

  constructor(private router: Router,private _http: HttpClient) { }
  // readonly APP_URL = 'http://localhost:8080/Springmvcangular';
  
  // getAllEmployees() {
  //   this._http.get(this.APP_URL + '/getemployees').subscribe(
  //     data => {
  //       this.myresponse = data;
  //     },
  //     error => {
  //       console.log('Error occured', error);
  //     }
  //   );
  // }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
