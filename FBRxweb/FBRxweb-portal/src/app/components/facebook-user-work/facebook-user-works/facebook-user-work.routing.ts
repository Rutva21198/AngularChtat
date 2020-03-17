import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacebookUserWorkListComponent } from './list/facebook-user-work-list.component';
import { FacebookUserWorkAddComponent } from './add/facebook-user-work-add.component';
import { FacebookUserWorkEditComponent } from './edit/facebook-user-work-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: FacebookUserWorkListComponent
    },
    {
        path: 'add',
        component: FacebookUserWorkAddComponent
    },
    {
        path: ':id',
        component:  FacebookUserWorkEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
