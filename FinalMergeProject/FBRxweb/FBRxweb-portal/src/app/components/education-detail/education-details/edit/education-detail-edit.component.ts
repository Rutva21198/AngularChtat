import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractEducationDetail } from '../domain/abstract-education-detail';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { EducationDetail } from '@app/models';

@Component({
    selector: "app-education-detail-edit",
    templateUrl: './education-detail-edit.component.html'
})
export class EducationDetailEditComponent extends AbstractEducationDetail implements OnInit, OnDestroy {
    educationDetail: EducationDetail;
    subscription: Subscription;
    id: number;
    result:any;
    

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.educationDetailFormGroup = this.formBuilder.formGroup(EducationDetail,t) as IFormGroup<EducationDetail>;
        })
    }
    

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
