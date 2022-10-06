import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicProjectsRoutingModule } from './academic-projects-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AcademicProjectsRoutingModule
  ]
})
export class AcademicProjectsModule { }
