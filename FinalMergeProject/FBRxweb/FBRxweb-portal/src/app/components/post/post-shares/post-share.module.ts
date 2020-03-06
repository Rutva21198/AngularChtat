import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './post-share.routing'

import { PostShareListComponent } from './list/post-share-list.component'
import { PostShareEditComponent } from './edit/post-share-edit.component';
import { PostShareAddComponent } from './add/post-share-add.component';
import { PostShareSharedModule } from './post-share-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,PostShareSharedModule,
        ROUTING
    ],
    declarations: [PostShareListComponent,PostShareEditComponent,PostShareAddComponent],
    exports: [RouterModule],
    providers: []
})
export class PostShareModule { }


