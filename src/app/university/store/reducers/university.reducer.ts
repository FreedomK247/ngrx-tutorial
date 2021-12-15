import { Actions } from '@ngrx/effects';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { UniversityModel } from 'src/app/_models';
import { universityActionTypes } from '../actions';

export const universityFeatureKey = 'university';

export interface UniversityState extends EntityState<UniversityModel> {
  universitiesLoaded: boolean;
}

export const adapter: EntityAdapter<UniversityModel> =
  createEntityAdapter<UniversityModel>();

export const initialState = adapter.getInitialState({
  universitiesLoaded: false,
});

export const universityeducer = createReducer(
  initialState,

  on(universityActionTypes.universitiesLoaded, (state, action) => {
    return adapter.setAll(action.universities, {
      ...state,
      universitiesLoaded: true,
    });
  }),

  on(universityActionTypes.createUniversity, (state, action) => {
    return adapter.addOne(action.university, state);
  }),

  on(universityActionTypes.updateUniversity, (state, action) => {
    return adapter.updateOne(action.update, state);
  }), 

  on(universityActionTypes.deleteUniversity, (state, action) => {
    return adapter.removeOne(action.universityId, state);
  })
  
);

export const {selectAll, selectIds} = adapter.getSelectors();