import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UniversityRoutingModule,
  declarations,
} from './university-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { InstitutionService } from '../_services';
import { institutionReducer, InstitutionEffects, InstitutionResolver } from './store';
import { SharedModule } from '../shared';
 
@NgModule({
  declarations: [...declarations],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('institutions', institutionReducer),
    EffectsModule.forFeature([InstitutionEffects]),
  ],
  providers: [InstitutionResolver, InstitutionService],
})
export class UniversityModule {}
