import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatMediaListComponent } from './list/chat-media-list.component';
import { ChatMediaAddComponent } from './add/chat-media-add.component';
import { ChatMediaEditComponent } from './edit/chat-media-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ChatMediaListComponent
    },
    {
        path: 'add',
        component: ChatMediaAddComponent
    },
    {
        path: ':id',
        component:  ChatMediaEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
