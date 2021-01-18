import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabourListComponent } from './labour-list/labour-list.component';
import { LabourCreateComponent } from './labour-create/labour-create.component';
import { ContractorListComponent } from './contractor-list/contractor-list.component';
import { ReportComponent } from './report/report.component';
import { ContractorCreateComponent } from './contractor-create/contractor-create.component';

export const routes: Routes = [
    {
    path: '',
    data: {
      title: 'HC'
    },
    children: [
        {
            path: 'report',
            component: ReportComponent,
            data: {
              title: 'report'
           }
          },
       {
        path: 'contractor',
        component: ContractorListComponent,
        data: {
          title: 'contractor'
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
        path: 'contractor-create',
        component: ContractorCreateComponent,
        data: {
          title: 'contractor-create'
        }
      },
     
      
    ]
  }

];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
export class HcRoutingModule {}
  