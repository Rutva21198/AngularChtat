import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogActivityListComponent } from './list/log-activity-list.component';
import { LogActivityAddComponent } from './add/log-activity-add.component';
import { LogActivityEditComponent } from './edit/log-activity-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: LogActivityListComponent
    },
    {
        path: 'add',
        component: LogActivityAddComponent
    },
    {
        path: ':id',
        component:  LogActivityEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
