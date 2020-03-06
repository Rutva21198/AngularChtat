import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vUserProfileListComponent } from './list/v-user-profile-list.component';
import { vUserProfileAddComponent } from './add/v-user-profile-add.component';
import { vUserProfileEditComponent } from './edit/v-user-profile-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: vUserProfileListComponent
    },
    {
        path: 'add',
        component: vUserProfileAddComponent
    },
    {
        path: ':id',
        component:  vUserProfileEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
