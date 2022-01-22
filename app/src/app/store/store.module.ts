import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store.routing.module';

import { ClientComponent } from './pages/clients/client.component';
import { HomeComponent } from './pages/home/home.component';
import { PhonesComponent } from './pages/phones/phones.component';
import { RepairsComponent } from './pages/repairs/repairs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    PhonesComponent,
    RepairsComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule
  ]
})
export class StoreModule { }
