import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/reducers';
import { UniversityModel } from '../_models';
import { UniversityService } from '../_services';
import { getAllUniversities } from './store';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss'],
})
export class UniversityComponent implements OnInit {
  universities$: Observable<UniversityModel[]>;

  universityToBeUpdated: UniversityModel;

  isUpdateActivated: false;

  constructor(
    private store: Store<AppState>,
    private universityService: UniversityService
  ) {}

  ngOnInit(): void {
    this.universities$ = this.store.select(getAllUniversities);
  }

  
}
