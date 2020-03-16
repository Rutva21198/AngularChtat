import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vAllOtherUserListComponent } from './list/v-all-other-user-list.component';
import { vAllOtherUserAddComponent } from './add/v-all-other-user-add.component';
import { vAllOtherUserEditComponent } from './edit/v-all-other-user-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: vAllOtherUserListComponent
    },
    {
        path: 'add',
        component: vAllOtherUserAddComponent
    },
    {
        path: ':id',
        component:  vAllOtherUserEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
