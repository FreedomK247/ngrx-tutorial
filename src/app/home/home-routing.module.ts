import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UniversityComponent } from './university';
 
const routes: Routes = [{ path: '', component: HomeComponent }];

export const declarations = [
  HomeComponent,
  UniversityComponent
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
