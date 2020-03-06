import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-check-like-user.routing'

import { vCheckLikeUserListComponent } from './list/v-check-like-user-list.component'
import { vCheckLikeUserEditComponent } from './edit/v-check-like-user-edit.component';
import { vCheckLikeUserAddComponent } from './add/v-check-like-user-add.component';
import { vCheckLikeUserSharedModule } from './v-check-like-user-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vCheckLikeUserSharedModule,
        ROUTING
    ],
    declarations: [vCheckLikeUserListComponent,vCheckLikeUserEditComponent,vCheckLikeUserAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vCheckLikeUserModule { }


