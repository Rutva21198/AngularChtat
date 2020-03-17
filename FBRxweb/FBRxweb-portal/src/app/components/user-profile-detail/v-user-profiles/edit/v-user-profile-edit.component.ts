import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvUserProfile } from '../domain/abstract-v-user-profile';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vUserProfile } from '@app/models';

@Component({
    selector: "app-v-user-profile-edit",
    templateUrl: './v-user-profile-edit.component.html'
})
export class vUserProfileEditComponent extends AbstractvUserProfile implements OnInit, OnDestroy {
    vUserProfile: vUserProfile;
    subscription: Subscription;
    id: number;
    result:any;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.get({params:[2],queryParams:{UserId:2}}).subscribe(res => {
            this.result = res;      })
            console.log(this.result); 
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.vUserProfileFormGroup = this.formBuilder.formGroup(vUserProfile,t) as IFormGroup<vUserProfile>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
