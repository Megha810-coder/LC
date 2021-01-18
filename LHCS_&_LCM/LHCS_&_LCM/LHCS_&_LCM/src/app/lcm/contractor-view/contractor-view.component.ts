import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';

@Component({
  selector: 'app-contractor-view',
  templateUrl: './contractor-view.component.html',
  styleUrls: ['./contractor-view.component.scss']
})
export class ContractorViewComponent implements OnInit {

  constructor(private userService:UserService) { }

  private user:User;
  ngOnInit() {
    this.user=this.userService.getter();
  }

}
