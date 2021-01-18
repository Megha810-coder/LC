import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';

@Component({
  selector: 'app-labour-view',
  templateUrl: './labour-view.component.html',
  styleUrls: ['./labour-view.component.scss']
})
export class LabourViewComponent implements OnInit {

  private user:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user =this.userService.getter();
  }

}
