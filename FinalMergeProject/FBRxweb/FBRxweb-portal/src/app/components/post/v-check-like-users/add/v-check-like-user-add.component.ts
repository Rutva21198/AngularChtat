import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vCheckLikeUser } from '@app/models';
import { AbstractvCheckLikeUser } from '../domain/abstract-v-check-like-user';

@Component({
    selector: "app-v-check-like-user-add",
    templateUrl: './v-check-like-user-add.component.html'
})
export class vCheckLikeUserAddComponent extends AbstractvCheckLikeUser implements OnInit, OnDestroy {
    vCheckLikeUser: vCheckLikeUser;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.vCheckLikeUser = new vCheckLikeUser();
        this.vCheckLikeUserFormGroup = this.formBuilder.formGroup(this.vCheckLikeUser) as IFormGroup<vCheckLikeUser>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
