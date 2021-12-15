import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityResolver } from './store';
import { UniversityComponent } from './university.component';

const routes: Routes = [{ path: '', component: UniversityComponent , resolve:{
  universities: UniversityResolver
}}];

export const declarations = [
  UniversityComponent
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversityRoutingModule {}
