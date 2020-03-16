import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { LogActivity } from '@app/models';
import { AbstractLogActivity } from '../domain/abstract-log-activity';
import { ActivatedRoute } from '@angular/router';
import { List } from '@rxweb/generics';

@Component({
    selector: "app-log-activity-add",
    templateUrl: './log-activity-add.component.html'
})
export class LogActivityAddComponent extends AbstractLogActivity implements OnInit, OnDestroy {
    logActivity: LogActivity;
    id: number;
    result:any;
    subscription: Subscription;
    logActivities:List<LogActivity>;
    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
       
    }
    ngOnInit(): void {
        this.logActivity = new LogActivity();
        this.logActivityFormGroup = this.formBuilder.formGroup(this.logActivity) as IFormGroup<LogActivity>;

        this.get({ params: [localStorage.getItem('userId')] ,queryParams:{UserId:localStorage.getItem('userId')}}).subscribe((t:List<LogActivity>) => { this.result=t
        console.log(this.result) })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
