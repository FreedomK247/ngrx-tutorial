import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { InstitutionModel } from 'src/app/_models';
import { getAllInstitutions } from '../../store';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss'],
})
export class UniversityListComponent implements OnInit {
  public displayedColumns = [
    'id',
    'name',
    'region',
    'postCode',
    'details',
    'update',
    'delete',
  ];

  public dataSource = new MatTableDataSource<InstitutionModel>();
  institutions : InstitutionModel[] =[];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getAllInstitutions();
  }

  public getAllInstitutions = () => {
    this.store.select(getAllInstitutions).subscribe((res) => {
      this.institutions = res as InstitutionModel[];
      this.dataSource.data =  this.institutions;
    });
  };

  public redirectToDetails = (id: string) => {
    
  }
  public redirectToUpdate = (id: string) => {
    
  }
  public redirectToDelete = (id: string) => {
    
  }

}
