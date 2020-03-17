import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-all-other-user.routing'

import { vAllOtherUserListComponent } from './list/v-all-other-user-list.component'
import { vAllOtherUserEditComponent } from './edit/v-all-other-user-edit.component';
import { vAllOtherUserAddComponent } from './add/v-all-other-user-add.component';
import { vAllOtherUserSharedModule } from './v-all-other-user-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vAllOtherUserSharedModule,
        ROUTING
    ],
    declarations: [vAllOtherUserListComponent,vAllOtherUserEditComponent,vAllOtherUserAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vAllOtherUserModule { }


