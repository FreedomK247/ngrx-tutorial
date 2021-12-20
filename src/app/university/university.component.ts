import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/reducers';
import { InstitutionModel, UniversityModel } from '../_models';
import { UniversityService } from '../_services';
import { getAllInstitutions } from './store';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss'],
})
export class UniversityComponent implements OnInit {
  institutions$: Observable<InstitutionModel[]>;

  universityToBeUpdated: InstitutionModel;

  isUpdateActivated: false;

  constructor(
    private store: Store<AppState>,
    private universityService: UniversityService
  ) {}

  ngOnInit(): void {
    this.institutions$ = this.store.select(getAllInstitutions);
  }

  
}
