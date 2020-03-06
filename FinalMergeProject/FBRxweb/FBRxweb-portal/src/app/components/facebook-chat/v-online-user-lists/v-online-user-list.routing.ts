import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vOnlineUserListListComponent } from './list/v-online-user-list-list.component';
import { vOnlineUserListAddComponent } from './add/v-online-user-list-add.component';
import { vOnlineUserListEditComponent } from './edit/v-online-user-list-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: vOnlineUserListListComponent
    },
    {
        path: 'add',
        component: vOnlineUserListAddComponent
    },
    {
        path: ':id',
        component:  vOnlineUserListEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
