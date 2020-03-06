import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostLikeListComponent } from './list/post-like-list.component';
import { PostLikeAddComponent } from './add/post-like-add.component';
import { PostLikeEditComponent } from './edit/post-like-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PostLikeListComponent
    },
    {
        path: 'add',
        component: PostLikeAddComponent
    },
    {
        path: ':id',
        component:  PostLikeEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
