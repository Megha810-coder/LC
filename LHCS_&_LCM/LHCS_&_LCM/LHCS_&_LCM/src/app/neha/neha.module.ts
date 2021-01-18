import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NehaComponentComponent } from './neha-component/neha-component.component';
import { NehaRoutingModule } from './neha-routing.module';
import { NehaApplicationComponent } from './neha-application/neha-application.component';
import { ApplicationlistComponent } from './applicationlist/applicationlist.component';


@NgModule({
  declarations: [NehaComponentComponent, NehaApplicationComponent, ApplicationlistComponent],
  exports:[NehaComponentComponent,NehaApplicationComponent,ApplicationlistComponent],
  imports: [
    CommonModule,NehaRoutingModule
  ]
})
export class NehaModule { }
