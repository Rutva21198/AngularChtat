import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './chat-media.routing'

import { ChatMediaListComponent } from './list/chat-media-list.component'
import { ChatMediaEditComponent } from './edit/chat-media-edit.component';
import { ChatMediaAddComponent } from './add/chat-media-add.component';
import { ChatMediaSharedModule } from './chat-media-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ChatMediaSharedModule,
        ROUTING
    ],
    declarations: [ChatMediaListComponent,ChatMediaEditComponent,ChatMediaAddComponent],
    exports: [RouterModule],
    providers: []
})
export class ChatMediaModule { }


