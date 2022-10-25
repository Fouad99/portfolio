import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    TabViewModule,
    AccordionModule,
    ButtonModule
  ]
})
export class SkillsModule { }
