import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { InstitutionModel } from 'src/app/_models';

export const loadInstitutions = createAction(
  '[Institutions List] Load Institutions via API Service'
);

export const institutionsLoaded = createAction(
  '[Institutions Effect] Load Institutions Loaded Successfully',
  props<{ institutions: InstitutionModel[] }>()
);

export const loadInstitutionById = createAction(
  '[Institution] Get Institution by Id via API Service',
  props<{ id: string | number }>()
);

export const institutionByIdLoaded = createAction(
  '[Institution] Get Institution By Id loaded Successfully',
  props<{ institution: InstitutionModel }>()
);

export const createInstitution = createAction(
  '[Create Institution Component] Create Institution',
  props<{ institution: InstitutionModel }>()
);

export const updateInstitution = createAction(
  '[Institutions List Operations] Update Institution',
  props<{ update: Update<InstitutionModel> }>()
);

export const deleteInstitution = createAction(
  '[Institutions List Operations] Delete Institution',
  props<{ institutionId: string }>()
);

export const institutionsActionTypes = {
  loadInstitutions,
  loadInstitutionById,
  institutionByIdLoaded,
  institutionsLoaded,
  createInstitution,
  updateInstitution,
  deleteInstitution,
};
