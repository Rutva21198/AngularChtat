import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-check-comment-user.routing'

import { vCheckCommentUserListComponent } from './list/v-check-comment-user-list.component'
import { vCheckCommentUserEditComponent } from './edit/v-check-comment-user-edit.component';
import { vCheckCommentUserAddComponent } from './add/v-check-comment-user-add.component';
import { vCheckCommentUserSharedModule } from './v-check-comment-user-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vCheckCommentUserSharedModule,
        ROUTING
    ],
    declarations: [vCheckCommentUserListComponent,vCheckCommentUserEditComponent,vCheckCommentUserAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vCheckCommentUserModule { }


