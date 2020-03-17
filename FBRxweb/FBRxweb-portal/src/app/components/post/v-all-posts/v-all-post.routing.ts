import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vAllPostListComponent } from './list/v-all-post-list.component';
import { vAllPostAddComponent } from './add/v-all-post-add.component';
import { vAllPostEditComponent } from './edit/v-all-post-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: vAllPostListComponent
    },
    {
        path: 'add',
        component: vAllPostAddComponent
    },
    {
        path: ':id',
        component:  vAllPostEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
