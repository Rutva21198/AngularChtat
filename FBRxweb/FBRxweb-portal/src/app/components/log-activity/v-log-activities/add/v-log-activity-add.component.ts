import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vLogActivity } from '@app/models';
import { AbstractvLogActivity } from '../domain/abstract-v-log-activity';
import { List } from '@rxweb/generics';

@Component({
    selector: "app-v-log-activity-add",
    templateUrl: './v-log-activity-add.component.html'
})
export class vLogActivityAddComponent extends AbstractvLogActivity implements OnInit, OnDestroy {
    vLogActivity: vLogActivity;
    subscription: Subscription;
    result:any;
 
    vlogActivities:List<vLogActivity>;
    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.vLogActivity = new vLogActivity();
        this.vLogActivityFormGroup = this.formBuilder.formGroup(this.vLogActivity) as IFormGroup<vLogActivity>;

        this.get({ params: [localStorage.getItem('userId')] ,queryParams:{UserId:localStorage.getItem('userId')}}).subscribe((t:List<vLogActivity>) => { this.result=t
            console.log(this.result) })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
