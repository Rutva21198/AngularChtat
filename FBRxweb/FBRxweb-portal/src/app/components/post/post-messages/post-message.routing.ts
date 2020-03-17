import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostMessageListComponent } from './list/post-message-list.component';
import { PostMessageAddComponent } from './add/post-message-add.component';
import { PostMessageEditComponent } from './edit/post-message-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PostMessageListComponent
    },
    {
        path: 'add',
        component: PostMessageAddComponent
    },
    {
        path: ':id',
        component:  PostMessageEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
