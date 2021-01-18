import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReqleavesComponent } from './reqleaves/reqleaves.component';
import { ReqformComponent } from './reqform/reqform.component';
import { MailComponent } from './mail/mail.component';
import { ThanksComponent } from './thanks/thanks.component';

export const routes: Routes = [
    {
    path: '',
    data: {
      title: 'leaves'
    },
    children: [
     {
         path:'',
         redirectTo:'Leave'
     },
      {
        path: 'Leave',
        component: ReqleavesComponent,
        data: {
          title: 'Leave'
        }
      },

    ]
   
  },
  {
    path: 'reqform',
    component: ReqformComponent,
    data: {
      title: 'reqform'
    }
  },

  {
    path: 'mail',
    component: MailComponent,
    data: {
      title: 'mail'
    }
  },
  {
    path: 'thankyou',
    component: ThanksComponent,
    data: {
      title: 'thankyou'
    }
  },

 
];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
export class LeavesRoutingModule {}
  