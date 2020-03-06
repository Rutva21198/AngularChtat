import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './post-media.routing'

import { PostMediaListComponent } from './list/post-media-list.component'
import { PostMediaEditComponent } from './edit/post-media-edit.component';
import { PostMediaAddComponent } from './add/post-media-add.component';
import { PostMediaSharedModule } from './post-media-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,PostMediaSharedModule,
        ROUTING
    ],
    declarations: [PostMediaListComponent,PostMediaEditComponent,PostMediaAddComponent],
    exports: [RouterModule],
    providers: []
})
export class PostMediaModule { }


