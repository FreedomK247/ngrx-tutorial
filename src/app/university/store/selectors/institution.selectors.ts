import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, InstitutionState } from '../reducers';
 
export const universityFeatureSelector = createFeatureSelector<InstitutionState>('institutions');

export const getAllUniversities = createSelector(
    universityFeatureSelector,
    selectAll
);

export const areInstitutionsLoaded = createSelector(
    universityFeatureSelector,
    state => state.institutionsLoaded
);

