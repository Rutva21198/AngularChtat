import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-check-share-user.routing'

import { vCheckShareUserListComponent } from './list/v-check-share-user-list.component'
import { vCheckShareUserEditComponent } from './edit/v-check-share-user-edit.component';
import { vCheckShareUserAddComponent } from './add/v-check-share-user-add.component';
import { vCheckShareUserSharedModule } from './v-check-share-user-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vCheckShareUserSharedModule,
        ROUTING
    ],
    declarations: [vCheckShareUserListComponent,vCheckShareUserEditComponent,vCheckShareUserAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vCheckShareUserModule { }


