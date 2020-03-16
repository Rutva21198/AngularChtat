import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vCheckShareUserListComponent } from './list/v-check-share-user-list.component';
import { vCheckShareUserAddComponent } from './add/v-check-share-user-add.component';
import { vCheckShareUserEditComponent } from './edit/v-check-share-user-edit.component';

const ROUTES: Routes = [
    {
        path: ':id',
        component: vCheckShareUserListComponent
    },
    {
        path: 'add',
        component: vCheckShareUserAddComponent
    },
    {
        path: '',
        component:  vCheckShareUserEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
