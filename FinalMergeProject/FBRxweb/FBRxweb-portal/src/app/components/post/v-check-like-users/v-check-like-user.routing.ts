import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vCheckLikeUserListComponent } from './list/v-check-like-user-list.component';
import { vCheckLikeUserAddComponent } from './add/v-check-like-user-add.component';
import { vCheckLikeUserEditComponent } from './edit/v-check-like-user-edit.component';

const ROUTES: Routes = [
    {
        path: ':id',
        component: vCheckLikeUserListComponent
    },
    {
        path: 'add',
        component: vCheckLikeUserAddComponent
    },
    {
        path: '',
        component:  vCheckLikeUserEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
