import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostCommentListComponent } from './list/post-comment-list.component';
import { PostCommentAddComponent } from './add/post-comment-add.component';
import { PostCommentEditComponent } from './edit/post-comment-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PostCommentListComponent
    },
    {
        path: 'add',
        component: PostCommentAddComponent
    },
    {
        path: ':id',
        component:  PostCommentEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
