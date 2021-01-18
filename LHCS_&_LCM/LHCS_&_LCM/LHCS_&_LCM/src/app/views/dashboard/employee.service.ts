import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './empolyee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient,private url: string ) { }
  public getEmployees(): Observable<Employee[]>
  { console.log("hii");
     this.url = "http://localhost:8080/ERP-LCM/labour/mng_labour";
 
    return this._http.get<Employee[]>(this.url);
  }
}
