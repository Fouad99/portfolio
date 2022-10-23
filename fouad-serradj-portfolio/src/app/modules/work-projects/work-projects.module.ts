import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkProjectsRoutingModule } from './work-projects-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PmoComponent } from './pmo/pmo.component';
import { IgComponent } from './ig/ig.component';
import { BnederComponent } from './bneder/bneder.component';



@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    PmoComponent,
    IgComponent,
    BnederComponent
  ],
  imports: [
    CommonModule,
    WorkProjectsRoutingModule,
    TabViewModule

  ]
})
export class WorkProjectsModule { }
