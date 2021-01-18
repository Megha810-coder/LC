import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorListComponent } from './contractor-list/contractor-list.component';
import { ContractorCreateComponent } from './contractor-create/contractor-create.component';
import { LabourCreateComponent } from './labour-create/labour-create.component';
import { LabourListComponent } from './labour-list/labour-list.component';
import { ReportComponent } from './report/report.component';
import { HcRoutingModule } from './hc-routing.module';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ButtonsModule } from 'ngx-bootstrap/buttons';


@NgModule({
  declarations: [ContractorListComponent, 
    ContractorCreateComponent, 
    LabourCreateComponent, 
    LabourListComponent, 
    ReportComponent,
    
    
    // ChartsModule,
    // BsDropdownModule
  ],
  exports: [ContractorListComponent, ContractorCreateComponent, LabourCreateComponent, LabourListComponent, ReportComponent],
  imports: [
    CommonModule,HcRoutingModule,FormsModule,ModalModule.forRoot()
  ]
})
export class HCModule { }
