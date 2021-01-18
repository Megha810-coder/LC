import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-lab-list1',
  templateUrl: './lab-list1.component.html',
  styleUrls: ['./lab-list1.component.scss']
})
export class LabList1Component implements OnInit {

  private user1:User;
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.user1 = this._userService.getter();
  }

}
