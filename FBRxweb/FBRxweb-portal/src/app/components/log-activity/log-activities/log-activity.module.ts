import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './log-activity.routing'

import { LogActivityListComponent } from './list/log-activity-list.component'
import { LogActivityEditComponent } from './edit/log-activity-edit.component';
import { LogActivityAddComponent } from './add/log-activity-add.component';
import { LogActivitySharedModule } from './log-activity-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,LogActivitySharedModule,
        ROUTING
    ],
    declarations: [LogActivityListComponent,LogActivityEditComponent,LogActivityAddComponent],
    exports: [RouterModule],
    providers: []
})
export class LogActivityModule { }


