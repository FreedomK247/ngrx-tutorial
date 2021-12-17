import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { InstitutionModel } from 'src/app/_models';

import { environment } from 'src/environments/environment';

const API_URL = environment.cerberusDashboardApi;
@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  private selectedInstitution = new Subject<InstitutionModel>();
  institution = this.selectedInstitution.asObservable();

  constructor(private http: HttpClient) {}

  getAllInstitutions(): Observable<InstitutionModel[]> {
    return this.http.get<InstitutionModel[]>(`${API_URL}/api/institutions`);
  }

  getInstitutionById(
    institutionId: string | number
  ): Observable<InstitutionModel> {
    return this.http.get<InstitutionModel>(
      `${API_URL}/api/institutions/${institutionId}`
    );
  }
  
  createInstitution(model: InstitutionModel): Observable<number> {
    return this.http.post<number>(`${API_URL}/api/institutions`, model);
  }

  updateInstitution(
    institutionId: string | number,
    changes: Partial<InstitutionModel>
  ): Observable<any> {
    return this.http.put<number>(
      `${API_URL}/api/institutions/${institutionId}`,
      changes
    );
  }

  deleteInstitution(institutionId: string | number): Observable<number> {
    return this.http.delete<number>(
      `${API_URL}/api/institutions/${institutionId}`
    );
  }
}
