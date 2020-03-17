import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostMediaListComponent } from './list/post-media-list.component';
import { PostMediaAddComponent } from './add/post-media-add.component';
import { PostMediaEditComponent } from './edit/post-media-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PostMediaListComponent
    },
    {
        path: 'add',
        component: PostMediaAddComponent
    },
    {
        path: ':id',
        component:  PostMediaEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
