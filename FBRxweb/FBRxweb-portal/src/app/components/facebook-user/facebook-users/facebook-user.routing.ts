import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacebookUserListComponent } from './list/facebook-user-list.component';
import { FacebookUserAddComponent } from './add/facebook-user-add.component';
import { FacebookUserEditComponent } from './edit/facebook-user-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: FacebookUserListComponent
    },
    {
        path: 'add',
        component: FacebookUserAddComponent
    },
    {
        path: ':id',
        component:  FacebookUserEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
