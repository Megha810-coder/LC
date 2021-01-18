import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabourListComponent } from './labour-list/labour-list.component';
import { PrerequisiteComponent } from './prerequisite/prerequisite.component';
import { LcmRoutingModule } from './lcm-routing.module';
import { PrerequisiteCreateComponent } from './prerequisite-create/prerequisite-create.component';
import { LabourCreateComponent } from './labour-create/labour-create.component';
import { CheckInListComponent } from './check-in-list/check-in-list.component';
import { CheckInCreateComponent } from './check-in-create/check-in-create.component';
import { ContractorCreateComponent } from './contractor-create/contractor-create.component';
import { ContractorListComponent } from './contractor-list/contractor-list.component';
import { ReportComponent } from './report/report.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {HttpModule} from '@angular/http';
import { ContLabourComponent } from './cont-labour/cont-labour.component';
import { AnnualDayComponent } from './annual-day/annual-day.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { LabList1Component } from './lab-list1/lab-list1.component';
import { LabShift1Component } from './lab-shift1/lab-shift1.component';
import { LabShift2Component } from './lab-shift2/lab-shift2.component';
import { LabShift3Component } from './lab-shift3/lab-shift3.component';
import { LabShift11Component } from './lab-shift11/lab-shift11.component';
import { LabShift22Component } from './lab-shift22/lab-shift22.component';
import { LabShift33Component } from './lab-shift33/lab-shift33.component';
import { ViewContractComponent } from './view-contract/view-contract.component';
import { EditContractComponent } from './edit-contract/edit-contract.component';
import { SheetComponent } from './sheet/sheet.component';
import {RouterModule, Routes} from '@angular/router';
import { DataComponent } from './data/data.component';
import { ContractorViewComponent } from './contractor-view/contractor-view.component';
import { LabourViewComponent } from './labour-view/labour-view.component';
// const appRoutes : Routes=[
//   {path:'op',
//    component:PrerequisiteCreateComponent}
// ]
@NgModule({
  declarations: [
    LabourListComponent, 
    PrerequisiteComponent,
    LabourCreateComponent,
    PrerequisiteCreateComponent,
    CheckInListComponent, 
    CheckInCreateComponent, 
    ContractorCreateComponent, 
    ContractorListComponent, 
    ReportComponent, 
    ContLabourComponent, 
    AnnualDayComponent, 
    LabListComponent, 
    LabList1Component, 
    LabShift1Component, 
    LabShift2Component, 
    LabShift3Component, 
    LabShift11Component,
     LabShift22Component, 
     LabShift33Component, 
     ViewContractComponent, 
     EditContractComponent, 
     SheetComponent, DataComponent, ContractorViewComponent, LabourViewComponent],
  exports:[
    LabourListComponent,
    PrerequisiteComponent],
  imports: [
    CommonModule,
    LcmRoutingModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
   //RouterModule.forRoot(appRoutes)
  ],
  providers: []
})
export class LCMModule { }
