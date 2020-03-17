import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostShareListComponent } from './list/post-share-list.component';
import { PostShareAddComponent } from './add/post-share-add.component';
import { PostShareEditComponent } from './edit/post-share-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PostShareListComponent
    },
    {
        path: 'add',
        component: PostShareAddComponent
    },
    {
        path: ':id',
        component:  PostShareEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
