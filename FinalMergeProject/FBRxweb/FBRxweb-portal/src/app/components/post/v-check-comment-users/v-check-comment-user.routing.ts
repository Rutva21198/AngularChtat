import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vCheckCommentUserListComponent } from './list/v-check-comment-user-list.component';
import { vCheckCommentUserAddComponent } from './add/v-check-comment-user-add.component';
import { vCheckCommentUserEditComponent } from './edit/v-check-comment-user-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: vCheckCommentUserListComponent
    },
    {
        path: 'add',
        component: vCheckCommentUserAddComponent
    },
    {
        path: ':id',
        component:  vCheckCommentUserEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
