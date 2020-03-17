import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvLogActivity } from '../domain/abstract-v-log-activity';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vLogActivity } from '@app/models';

@Component({
    selector: "app-v-log-activity-edit",
    templateUrl: './v-log-activity-edit.component.html'
})
export class vLogActivityEditComponent extends AbstractvLogActivity implements OnInit, OnDestroy {
    vLogActivity: vLogActivity;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.vLogActivityFormGroup = this.formBuilder.formGroup(vLogActivity,t) as IFormGroup<vLogActivity>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
