import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './facebook-user-work.routing'

import { FacebookUserWorkListComponent } from './list/facebook-user-work-list.component'
import { FacebookUserWorkEditComponent } from './edit/facebook-user-work-edit.component';
import { FacebookUserWorkAddComponent } from './add/facebook-user-work-add.component';
import { FacebookUserWorkSharedModule } from './facebook-user-work-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,FacebookUserWorkSharedModule,
        ROUTING
    ],
    declarations: [FacebookUserWorkListComponent,FacebookUserWorkEditComponent,FacebookUserWorkAddComponent],
    exports: [RouterModule],
    providers: []
})
export class FacebookUserWorkModule { }


