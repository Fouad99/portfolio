import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../academic-projects/home/home.component';
import { AlcatrazComponent } from './alcatraz/alcatraz.component';
import { GenerateurCarteIsometriquesComponent } from './generateur-carte-isometriques/generateur-carte-isometriques.component';
import { NatationComponent } from './natation/natation.component';
import { PokerComponent } from './poker/poker.component';
import { SharifyComponent } from './sharify/sharify.component';
import { StockManagementComponent } from './stock-management/stock-management.component';
import { TallyComponent } from './tally/tally.component';
import { ZipsLawComponent } from './zips-law/zips-law.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'alcatraz', component: AlcatrazComponent},
  {path: 'generateur-carte-isometrique', component: GenerateurCarteIsometriquesComponent},
  {path: 'natation', component: NatationComponent},
  {path: 'poker', component: PokerComponent},
  {path: 'sharify', component: SharifyComponent},
  {path: 'stock-management', component: StockManagementComponent},
  {path: 'tally', component: TallyComponent},
  {path: 'zips-law', component: ZipsLawComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicProjectsRoutingModule { }
