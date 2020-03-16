import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-log-activity.routing'

import { vLogActivityListComponent } from './list/v-log-activity-list.component'
import { vLogActivityEditComponent } from './edit/v-log-activity-edit.component';
import { vLogActivityAddComponent } from './add/v-log-activity-add.component';
import { vLogActivitySharedModule } from './v-log-activity-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vLogActivitySharedModule,
        ROUTING
    ],
    declarations: [vLogActivityListComponent,vLogActivityEditComponent,vLogActivityAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vLogActivityModule { }


