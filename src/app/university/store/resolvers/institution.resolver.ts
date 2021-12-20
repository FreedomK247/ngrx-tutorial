import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/reducers';
import {
  areInstitutionsLoaded,
  loadInstitutions,
 } from '..';

@Injectable()
export class UniversityResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
    return this.store.pipe(
      select(areInstitutionsLoaded),
      tap((institutionsLoaded) => {
        if (!institutionsLoaded) {
          this.store.dispatch(loadInstitutions());
        }
      }),
      filter((institutionsLoaded) => institutionsLoaded),
      first()
    );
  }
}
