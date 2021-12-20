import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { InstitutionService } from 'src/app/_services';
import { institutionsActionTypes } from '../actions';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable()
export class InstitutionEffects {
  constructor(
    private actions$: Actions,
    private institutionService: InstitutionService,
    private router: Router
  ) {}

  loadInstitutions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(institutionsActionTypes.loadInstitutions),
      concatMap(() => this.institutionService.getAllInstitutions()),
      map((institutions) =>
        institutionsActionTypes.institutionsLoaded({ institutions })
      )
    )
  );

  createInstitution$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(institutionsActionTypes.createInstitution),
        concatMap((action) =>
          this.institutionService.createInstitution(action.institution)
        ),
        tap(() => this.router.navigateByUrl('/institutions'))
      ),
    { dispatch: false }
  );

  updateInstitution$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(institutionsActionTypes.updateInstitution),
        concatMap((action) =>
          this.institutionService.updateInstitution(
            action.update.id,
            action.update.changes
          )
        )
      ),

    { dispatch: false }
  );

  deleteInstitution$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(institutionsActionTypes.deleteInstitution),
        concatMap((action) =>
          this.institutionService.deleteInstitution(action.institutionId)
        )
      ),
    { dispatch: false }
  );
}
