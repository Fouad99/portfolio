import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkProjectsRoutingModule } from './work-projects-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    WorkProjectsRoutingModule
  ]
})
export class WorkProjectsModule { }
