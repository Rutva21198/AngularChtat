import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractLogActivity } from '../domain/abstract-log-activity';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { LogActivity } from '@app/models';

@Component({
    selector: "app-log-activity-edit",
    templateUrl: './log-activity-edit.component.html'
})
export class LogActivityEditComponent extends AbstractLogActivity implements OnInit, OnDestroy {
    logActivity: LogActivity;
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
            this.logActivityFormGroup = this.formBuilder.formGroup(LogActivity,t) as IFormGroup<LogActivity>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
