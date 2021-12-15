import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { UniversityModel } from 'src/app/_models';

export const loadUniversities = createAction(
  '[Universities List] Load Universities via API Service',
);


export const universitiesLoaded = createAction(
  '[Universities Effect] Load Universities Loaded Successfully',
  props<{universities: UniversityModel[]}>()
);

export const createUniversity = createAction(
  '[Create University Component] Create University',
  props<{university: UniversityModel}>()
);

export const updateUniversity = createAction(
  '[Universities List Operations] Update University',
  props<{update: Update<UniversityModel>}>()
);

export const deleteUniversity = createAction(
  '[Universities List Operations] Delete University',
  props<{universityId: string}>()
);

export const universityActionTypes = {
  loadUniversities,
  universitiesLoaded,
  createUniversity,
  updateUniversity,
  deleteUniversity
};