import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'work-projects', loadChildren: () => import('./modules/work-projects/work-projects.module').then(m => m.WorkProjectsModule)},
  {path: 'academic-projects', loadChildren: () => import('./modules/academic-projects/academic-projects.module').then(m => m.AcademicProjectsModule)},
  {path: 'skills', loadChildren: () => import('./modules/skills/skills.module').then(m => m.SkillsModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
