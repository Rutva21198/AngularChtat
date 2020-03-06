import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './post-like.routing'

import { PostLikeListComponent } from './list/post-like-list.component'
import { PostLikeEditComponent } from './edit/post-like-edit.component';
import { PostLikeAddComponent } from './add/post-like-add.component';
import { PostLikeSharedModule } from './post-like-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,PostLikeSharedModule,
        ROUTING
    ],
    declarations: [PostLikeListComponent,PostLikeEditComponent,PostLikeAddComponent],
    exports: [RouterModule],
    providers: []
})
export class PostLikeModule { }


