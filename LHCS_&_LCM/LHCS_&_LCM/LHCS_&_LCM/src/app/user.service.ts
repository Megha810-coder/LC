import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:String="http://localhost:8080/ERP-LCM/";
  private headers = new Headers({'Content-Type':'application/json; charset=utf8'});
  private options = new RequestOptions({headers:this.headers});
  private user :User;

  constructor(private _http:Http) { }

  createUser(user:User){
    return this._http.post(this.baseUrl+'labour/save_prerequisite',JSON.stringify(user)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateUser(user:User){
    return this._http.post(this.baseUrl+'labour/updateHr',JSON.stringify(user)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createLabour(user:User){
    return this._http.post(this.baseUrl+'labour/save_labour',JSON.stringify(user)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateLabour(user:User){
    return this._http.post(this.baseUrl+'labour/updateLab',JSON.stringify(user)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getUsers(){
    return this._http.get(this.baseUrl+'labour/mng_prerequisite').map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createLab(user:User){
    return this._http.post(this.baseUrl+'labour/save_labour',JSON.stringify(user)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateLab(user:User){
    return this._http.post(this.baseUrl+'labour/updateLab',JSON.stringify(user)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  
  updateIncident(user:User){
    return this._http.post(this.baseUrl+'labour/updateLab',JSON.stringify(user)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }


  createContractor(user:User){
    return this._http.post(this.baseUrl+'labour/save_contract',JSON.stringify(user)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateContractor(user:User){
    return this._http.post(this.baseUrl+'labour/update_contract',JSON.stringify(user)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }

  setter(user:User){
    this.user=user;
  }


  getter(){
    return this.user;
  }
}
