import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicProjectsRoutingModule } from './academic-projects-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NatationComponent } from './natation/natation.component';
import { SharifyComponent } from './sharify/sharify.component';
import { ZipsLawComponent } from './zips-law/zips-law.component';
import { PokerComponent } from './poker/poker.component';
import { StockManagementComponent } from './stock-management/stock-management.component';
import { AlcatrazComponent } from './alcatraz/alcatraz.component';
import { TallyComponent } from './tally/tally.component';
import { GenerateurCarteIsometriquesComponent } from './generateur-carte-isometriques/generateur-carte-isometriques.component';

import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import { BloodComponent } from './blood/blood.component';
import { TextRecognitionComponent } from './text-recognition/text-recognition.component';



@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    NatationComponent,
    SharifyComponent,
    ZipsLawComponent,
    PokerComponent,
    StockManagementComponent,
    AlcatrazComponent,
    TallyComponent,
    GenerateurCarteIsometriquesComponent,
    BloodComponent,
    TextRecognitionComponent
  ],
  imports: [
    CommonModule,
    AcademicProjectsRoutingModule,
    TabViewModule,
    AccordionModule,
    ButtonModule
  ]
})
export class AcademicProjectsModule { }
