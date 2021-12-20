import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, InstitutionState } from '../reducers';
 
export const institutionFeatureSelector = createFeatureSelector<InstitutionState>('institutions');

export const getAllInstitutions = createSelector(
    institutionFeatureSelector,
    selectAll
);

export const areInstitutionsLoaded = createSelector(
    institutionFeatureSelector,
    state => state.institutionsLoaded
);

