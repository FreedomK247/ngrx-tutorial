import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UniversityRoutingModule,
  declarations,
} from './university-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UniversityService } from '../_services';
import { universityeducer, UniversityEffects } from './store';

@NgModule({
  declarations: [...declarations],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('universities', universityeducer),
    EffectsModule.forFeature([UniversityEffects]),
  ],
  providers: [UniversityService],
})
export class UniversityModule {}
