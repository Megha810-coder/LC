import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NehaComponentComponent } from './neha-component/neha-component.component';
import { NehaApplicationComponent } from './neha-application/neha-application.component';
import { ApplicationlistComponent } from './applicationlist/applicationlist.component';

export const routes: Routes = [
    {
    path: '',
    data: {
      title: 'neha'
    },
    children: [
     
      {
        path: 'Job',
        component: NehaComponentComponent,
        data: {
          title: 'Job'
        }
      },
      {
        path: 'Application',
        component: NehaApplicationComponent,
        data: {
          title: 'Application'
        }
      },
      {
        path: 'Applicationlist',
        component: ApplicationlistComponent,
        data: {
          title: 'Applicationlist'
        }
      },
    ]
  }

];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
export class NehaRoutingModule {}
  