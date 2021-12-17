export interface InstitutionModel {
  id?: number;
  name?: string;
  region?: string;
  isMainCampus?: boolean;
  province?: string;
  postCode?: string;
  createdDate?: Date;
  createUserId?: string;
  modifyDate?: Date;
  modifyUserId?: string;
  isActive?: boolean;
}
