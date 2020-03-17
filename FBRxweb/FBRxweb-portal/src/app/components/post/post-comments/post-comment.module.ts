import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './post-comment.routing'

import { PostCommentListComponent } from './list/post-comment-list.component'
import { PostCommentEditComponent } from './edit/post-comment-edit.component';
import { PostCommentAddComponent } from './add/post-comment-add.component';
import { PostCommentSharedModule } from './post-comment-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,PostCommentSharedModule,
        ROUTING
    ],
    declarations: [PostCommentListComponent,PostCommentEditComponent,PostCommentAddComponent],
    exports: [RouterModule],
    providers: []
})
export class PostCommentModule { }


