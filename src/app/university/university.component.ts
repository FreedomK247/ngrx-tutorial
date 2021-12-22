import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/reducers';
import { InstitutionModel, UniversityModel } from '../_models';
import { getAllInstitutions } from './store';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss'],
})
export class UniversityComponent implements OnInit { 
 
  constructor(
   ) {}

  ngOnInit(): void {
   }

  
}
