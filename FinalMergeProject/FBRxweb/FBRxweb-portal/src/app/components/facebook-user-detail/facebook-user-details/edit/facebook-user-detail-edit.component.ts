import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractFacebookUserDetail } from '../domain/abstract-facebook-user-detail';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { FacebookUserDetail } from '@app/models';

@Component({
    selector: "app-facebook-user-detail-edit",
    templateUrl: './facebook-user-detail-edit.component.html'
})
export class FacebookUserDetailEditComponent extends AbstractFacebookUserDetail implements OnInit, OnDestroy {
    facebookUserDetail: FacebookUserDetail;
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
            this.facebookUserDetailFormGroup = this.formBuilder.formGroup(FacebookUserDetail,t) as IFormGroup<FacebookUserDetail>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
