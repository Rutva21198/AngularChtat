import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationDetailListComponent } from './list/education-detail-list.component';
import { EducationDetailAddComponent } from './add/education-detail-add.component';
import { EducationDetailEditComponent } from './edit/education-detail-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: EducationDetailListComponent
    },
    {
        path: 'add',
        component: EducationDetailAddComponent
    },
    {
        path: ':id',
        component:  EducationDetailEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
