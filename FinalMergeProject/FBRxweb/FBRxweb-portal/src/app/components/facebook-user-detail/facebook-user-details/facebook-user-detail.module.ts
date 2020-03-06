import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './facebook-user-detail.routing'

import { FacebookUserDetailListComponent } from './list/facebook-user-detail-list.component'
import { FacebookUserDetailEditComponent } from './edit/facebook-user-detail-edit.component';
import { FacebookUserDetailAddComponent } from './add/facebook-user-detail-add.component';
import { FacebookUserDetailSharedModule } from './facebook-user-detail-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,FacebookUserDetailSharedModule,
        ROUTING
    ],
    declarations: [FacebookUserDetailListComponent,FacebookUserDetailEditComponent,FacebookUserDetailAddComponent],
    exports: [RouterModule],
    providers: []
})
export class FacebookUserDetailModule { }


