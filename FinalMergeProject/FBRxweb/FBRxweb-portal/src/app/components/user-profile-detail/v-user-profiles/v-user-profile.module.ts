import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-user-profile.routing'

import { vUserProfileListComponent } from './list/v-user-profile-list.component'
import { vUserProfileEditComponent } from './edit/v-user-profile-edit.component';
import { vUserProfileAddComponent } from './add/v-user-profile-add.component';
import { vUserProfileSharedModule } from './v-user-profile-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vUserProfileSharedModule,
        ROUTING
    ],
    declarations: [vUserProfileListComponent,vUserProfileEditComponent,vUserProfileAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vUserProfileModule { }


