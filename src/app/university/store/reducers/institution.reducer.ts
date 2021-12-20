import { Actions } from '@ngrx/effects';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { InstitutionModel } from 'src/app/_models';
import { institutionsActionTypes } from '../actions';

export const institutionFeatureKey = 'institution';

export interface InstitutionState extends EntityState<InstitutionModel> {
  institutionsLoaded: boolean;
}

export const adapter: EntityAdapter<InstitutionModel> =
  createEntityAdapter<InstitutionModel>({
    selectId: (institution: InstitutionModel) => institution.id,
  });

export const initialState = adapter.getInitialState({
  institutionsLoaded: false,
});

export const institutionReducer = createReducer(
  initialState,

  on(institutionsActionTypes.institutionsLoaded, (state, action) => {
    return adapter.setAll(action.institutions, {
      ...state,
      institutionsLoaded: true,
    });
  }),

  on(institutionsActionTypes.loadInstitutionById, (state, action) => ({
    ...state,
    isLoading: true,
  })),

  on(institutionsActionTypes.institutionByIdLoaded, (state, action) => ({
    ...state,
    isLoading: false,
    institution: action.institution,
  })),

  on(institutionsActionTypes.createInstitution, (state, action) => {
    return adapter.addOne(action.institution, state);
  }),

  on(institutionsActionTypes.updateInstitution, (state, action) => {
    return adapter.updateOne(action.update, state);
  }),

  on(institutionsActionTypes.deleteInstitution, (state, action) => {
    return adapter.removeOne(action.institutionId, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
