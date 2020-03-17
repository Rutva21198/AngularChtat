import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './education-detail.routing'

import { EducationDetailListComponent } from './list/education-detail-list.component'
import { EducationDetailEditComponent } from './edit/education-detail-edit.component';
import { EducationDetailAddComponent } from './add/education-detail-add.component';
import { EducationDetailSharedModule } from './education-detail-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,EducationDetailSharedModule,
        ROUTING
    ],
    declarations: [EducationDetailListComponent,EducationDetailEditComponent,EducationDetailAddComponent],
    exports: [RouterModule],
    providers: []
})
export class EducationDetailModule { }


