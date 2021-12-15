import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UniversityService } from 'src/app/_services';
import { universityActionTypes } from '../actions';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable()
export class UniversityEffects {
  constructor(
    private actions$: Actions,
    private universityService: UniversityService,
    private router: Router
  ) {}

  loadUniversities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(universityActionTypes.loadUniversities),
      concatMap(() => this.universityService.getUniversities()),
      map((universities) =>
        universityActionTypes.universitiesLoaded({ universities })
      )
    )
  );

  createUniversity$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(universityActionTypes.createUniversity),
        // TODO implement Api service call here.
        tap(() => this.router.navigateByUrl('/universities'))
      ),
    { dispatch: false }
  );

  updateUniversity$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(universityActionTypes.updateUniversity)
        // TODO implement Api service call here.
      ),

    { dispatch: false }
  );

  deleteUniversity$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(universityActionTypes.deleteUniversity)
        // TODO implement Api service call here.
      ),
    { dispatch: false }
  );
}
