import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './facebook-user.routing'

import { FacebookUserListComponent } from './list/facebook-user-list.component'
import { FacebookUserEditComponent } from './edit/facebook-user-edit.component';
import { FacebookUserAddComponent } from './add/facebook-user-add.component';
import { FacebookUserSharedModule } from './facebook-user-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,FacebookUserSharedModule,
        ROUTING
    ],
    declarations: [FacebookUserListComponent,FacebookUserEditComponent,FacebookUserAddComponent],
    exports: [RouterModule],
    providers: []
})
export class FacebookUserModule { }


