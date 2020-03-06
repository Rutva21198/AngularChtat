import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacebookUserDetailListComponent } from './list/facebook-user-detail-list.component';
import { FacebookUserDetailAddComponent } from './add/facebook-user-detail-add.component';
import { FacebookUserDetailEditComponent } from './edit/facebook-user-detail-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: FacebookUserDetailListComponent
    },
    {
        path: 'add',
        component: FacebookUserDetailAddComponent
    },
    {
        path: ':id',
        component:  FacebookUserDetailEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
