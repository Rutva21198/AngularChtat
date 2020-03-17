import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatMeessageListComponent } from './list/chat-meessage-list.component';
import { ChatMeessageAddComponent } from './add/chat-meessage-add.component';
import { ChatMeessageEditComponent } from './edit/chat-meessage-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ChatMeessageListComponent
    },
    {
        path: 'add',
        component: ChatMeessageAddComponent
    },
    {
        path: ':id',
        component:  ChatMeessageEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
