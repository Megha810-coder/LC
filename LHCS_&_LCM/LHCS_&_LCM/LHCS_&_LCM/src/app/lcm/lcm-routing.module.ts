import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrerequisiteComponent } from './prerequisite/prerequisite.component';
import { LabourListComponent } from './labour-list/labour-list.component';
import { LabourCreateComponent } from './labour-create/labour-create.component';
import { PrerequisiteCreateComponent } from './prerequisite-create/prerequisite-create.component';
import { CheckInListComponent } from './check-in-list/check-in-list.component';
import { ContractorListComponent } from './contractor-list/contractor-list.component';
import { ContractorCreateComponent } from './contractor-create/contractor-create.component';
import { ReportComponent } from './report/report.component';
import { CheckInCreateComponent } from './check-in-create/check-in-create.component';
import { ContLabourComponent } from './cont-labour/cont-labour.component';
import {AnnualDayComponent } from './annual-day/annual-day.component';
import {LabListComponent} from './lab-list/lab-list.component';
import {LabList1Component } from './lab-list1/lab-list1.component';
import { LabShift1Component } from './lab-shift1/lab-shift1.component';
import { LabShift2Component } from './lab-shift2/lab-shift2.component';
import { LabShift3Component } from './lab-shift3/lab-shift3.component';
import { LabShift11Component } from './lab-shift11/lab-shift11.component';
import { LabShift22Component } from './lab-shift22/lab-shift22.component';
import { LabShift33Component } from './lab-shift33/lab-shift33.component';
import {ViewContractComponent } from './view-contract/view-contract.component';
import { EditContractComponent } from './edit-contract/edit-contract.component';
import { SheetComponent } from './sheet/sheet.component';
import { DataComponent } from './data/data.component';
import { ContractorViewComponent } from './contractor-view/contractor-view.component';
import { LabourViewComponent } from './labour-view/labour-view.component';

export const routes: Routes = [
    {
    path: '',
    data: {
      title: 'LCM'
    },
    children: [
     
       {
        path: 'Prerequisite',
        component: PrerequisiteComponent,
        data: {
          title: 'Prerequisite'
       }
      },
      {
        path: 'Labour',
        component: LabourListComponent,
        data: {
          title: 'Labour'
       }
      },
      {
        path: 'labour-create',
        component: LabourCreateComponent,
        data: {
          title: 'labour-create'
        }
      },
      {
        path: 'Contractor',
        component: ContractorListComponent,
        data: {
          title: 'Contractor'
       }
      },
      {
        path: 'contractor-create',
        component: ContractorCreateComponent,
        data: {
          title: 'contractor-create'
        }
      },
       {
         path: 'prerequisite-create',
         component: PrerequisiteCreateComponent,
         data: {
           title: 'prerequisite-create'
         }
       },
      {
        path: 'CheckIn',
        component: CheckInListComponent,
        data: {
          title: 'CheckIn'
        }
      },
      {
        path: 'check-in-create',
        component: CheckInCreateComponent,
        data: {
          title: 'check-in-create'
       }
      },
      {
        path: 'report',
        component: ReportComponent,
        data: {
          title: 'report'
        }
      },
      // {
      //   path: 'prerequisite-create',
      //   component: PrerequisiteCreateComponent,
      //   data: {
      //     title: 'prerequisite-create'
      //   }
      // },
      {
        path: 'contract-labour',
        component: ContLabourComponent,
        data: {
          title: 'contract-labour'
        }
      },
      
      {
        path: 'annual_Day',
        component: AnnualDayComponent,
        data: {
          title: 'annual_Day'
        }
      },
      
      {
        path: 'Lab_list',
        component: LabListComponent,
        data: {
          title: 'Lab_list'
        }
      },
      {
        path: 'Lab_list1',
        component: LabList1Component,
        data: {
          title: 'Lab_list1'
        }
      },
      {
        path: 'Lab_shift1',
        component: LabShift1Component,
        data: {
          title: 'Lab_shift1'
        }
      },
      {
        path: 'Lab_shift2',
        component: LabShift2Component,
        data: {
          title: 'Lab_shift2'
        }
      },
      {
        path: 'Lab_shift3',
        component: LabShift3Component,
        data: {
          title: 'Lab_shift3'
        }
      },

      {
        path: 'Lab_shift11',
        component: LabShift11Component,
        data: {
          title: 'Lab_shift11'
        }
      },
      {
        path: 'Lab_shift22',
        component: LabShift22Component,
        data: {
          title: 'Lab_shift22'
        }
      },
      {
        path: 'Lab_shift33',
        component: LabShift33Component,
        data: {
          title: 'Lab_shift33'
        }
      },
      {
        path: 'View',
        component: ViewContractComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'Edit',
        component: EditContractComponent,
        data: {
          title: 'Edit'
        }
      },
      {
        path: 'Sheet',
        component: SheetComponent,
        data: {
          title: 'Sheet'
        }
      },
      {
        path: 'data',
        component: DataComponent,
        data: {
          title: 'data'
        }
      },
      {
        path: 'contractor-view',
        component: ContractorViewComponent,
        data: {
          title: 'contractor-view'
        }
      },
      {
        path: 'labour-view',
        component: LabourViewComponent,
        data: {
          title: 'labour-view'
        }
      },
    ]
  }

];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
export class LcmRoutingModule {}
  