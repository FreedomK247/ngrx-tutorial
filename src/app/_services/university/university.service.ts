import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UniversityModel } from 'src/app/_models';

import { environment } from 'src/environments/environment';

const Api = environment.universitiesApi;

@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  private selectedUniversity = new Subject<UniversityModel>();
  university= this.selectedUniversity.asObservable();

  constructor(private http: HttpClient) {}

  getUniversities() {
    var param = 'South+Africa';
    return this.http.get<UniversityModel[]>(`${Api}/search?country=${param}`);
  }

  selectUniversity(model: any) {
    this.selectedUniversity.next(model);
  }
}
