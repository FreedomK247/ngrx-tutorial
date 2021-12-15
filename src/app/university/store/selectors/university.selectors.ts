import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, UniversityState } from '../reducers';
 
export const universityFeatureSelector = createFeatureSelector<UniversityState>('universities');

export const getAllUniversities = createSelector(
    universityFeatureSelector,
    selectAll
);

export const areUniversitiesLoaded = createSelector(
    universityFeatureSelector,
    state => state.universitiesLoaded
);

