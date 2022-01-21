import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/clients/client.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'clients',
        component: ClientComponent
      },
    //   {
    //     path: 'phones',
    //     component: 
    //   },
    //   {
    //     path: '**',
    //     redirectTo: 'login'
    //   }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
