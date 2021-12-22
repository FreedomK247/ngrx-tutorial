import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityListComponent } from './components';
import { InstitutionResolver } from './store';
import { UniversityComponent } from './university.component';

const routes: Routes = [
  {
    path: '',
    component: UniversityComponent,
    resolve: {
      universities: InstitutionResolver,
    },
    children: [
      {
        path:'',
        component: UniversityListComponent
      }
    ]
  },
];

export const declarations = [UniversityComponent, UniversityListComponent];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversityRoutingModule {}
