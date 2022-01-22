import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './pages/clients/client.component';
import { PhonesComponent } from './pages/phones/phones.component';
import { HomeComponent } from './pages/home/home.component';
import { RepairsComponent } from './pages/repairs/repairs.component';

const routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'clients', component: ClientComponent },
      { path: 'phones', component: PhonesComponent },
      { path: 'phones/client/:id', component: PhonesComponent },
      { path: 'repairs', component: RepairsComponent },
      { path: 'repairs/phone/:id', component: RepairsComponent },
      { path: '**', redirectTo: 'clients' }
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
export class StoreRoutingModule { }
