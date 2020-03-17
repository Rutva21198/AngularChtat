import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-online-user-list.routing'

import { vOnlineUserListListComponent } from './list/v-online-user-list-list.component'
import { vOnlineUserListEditComponent } from './edit/v-online-user-list-edit.component';
import { vOnlineUserListAddComponent } from './add/v-online-user-list-add.component';
import { vOnlineUserListSharedModule } from './v-online-user-list-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vOnlineUserListSharedModule,
        ROUTING
    ],
    declarations: [vOnlineUserListListComponent,vOnlineUserListEditComponent,vOnlineUserListAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vOnlineUserListModule { }


