import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './chat-meessage.routing'

import { ChatMeessageListComponent } from './list/chat-meessage-list.component'
import { ChatMeessageEditComponent } from './edit/chat-meessage-edit.component';
import { ChatMeessageAddComponent } from './add/chat-meessage-add.component';
import { ChatMeessageSharedModule } from './chat-meessage-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ChatMeessageSharedModule,
        ROUTING
    ],
    declarations: [ChatMeessageListComponent,ChatMeessageEditComponent,ChatMeessageAddComponent],
    exports: [RouterModule],
    providers: []
})
export class ChatMeessageModule { }


