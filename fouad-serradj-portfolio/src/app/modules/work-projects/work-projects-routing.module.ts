import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../work-projects/home/home.component'
import { PmoComponent } from './pmo/pmo.component';
import { IgComponent } from './ig/ig.component';
import { BnederComponent } from './bneder/bneder.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pmo-concordia', component: PmoComponent},
  {path: 'ig-rogers', component: IgComponent},
  {path: 'sig-bneder', component: BnederComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkProjectsRoutingModule { }
