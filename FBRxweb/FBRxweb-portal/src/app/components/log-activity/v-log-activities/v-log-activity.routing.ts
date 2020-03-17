import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vLogActivityListComponent } from './list/v-log-activity-list.component';
import { vLogActivityAddComponent } from './add/v-log-activity-add.component';
import { vLogActivityEditComponent } from './edit/v-log-activity-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: vLogActivityListComponent
    },
    {
        path: 'add',
        component: vLogActivityAddComponent
    },
    {
        path: ':id',
        component:  vLogActivityEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
