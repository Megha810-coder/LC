import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqleavesComponent } from './reqleaves/reqleaves.component';
import { LeavesRoutingModule } from './leaves-routing.module';
import { ReqformComponent } from './reqform/reqform.component';
import { MailComponent } from './mail/mail.component';
import { ThanksComponent } from './thanks/thanks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReqleavesComponent, ReqformComponent, MailComponent, ThanksComponent ],
  exports: [ReqleavesComponent,ReqformComponent],
  imports: [
    CommonModule,LeavesRoutingModule,FormsModule
  ]
})
export class LeavesModule { }
