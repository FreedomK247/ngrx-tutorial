import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule , declarations } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UniversityComponent } from './university/university.component';


@NgModule({
  declarations: [
      ...declarations
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
