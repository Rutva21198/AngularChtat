import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-all-post.routing'

import { vAllPostListComponent } from './list/v-all-post-list.component'
import { vAllPostEditComponent } from './edit/v-all-post-edit.component';
import { vAllPostAddComponent } from './add/v-all-post-add.component';
import { vAllPostSharedModule } from './v-all-post-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vAllPostSharedModule,
        ROUTING
    ],
    declarations: [vAllPostListComponent,vAllPostEditComponent,vAllPostAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vAllPostModule { }


