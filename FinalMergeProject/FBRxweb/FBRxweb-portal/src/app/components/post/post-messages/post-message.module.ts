import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './post-message.routing'

import { PostMessageListComponent } from './list/post-message-list.component'
import { PostMessageEditComponent } from './edit/post-message-edit.component';
import { PostMessageAddComponent } from './add/post-message-add.component';
import { PostMessageSharedModule } from './post-message-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,PostMessageSharedModule,
        ROUTING
    ],
    declarations: [PostMessageListComponent,PostMessageEditComponent,PostMessageAddComponent],
    exports: [RouterModule],
    providers: []
})
export class PostMessageModule { }


