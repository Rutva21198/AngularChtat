import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvCheckLikeUser } from '../domain/abstract-v-check-like-user';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vCheckLikeUser } from '@app/models';

@Component({
    selector: "app-v-check-like-user-edit",
    templateUrl: './v-check-like-user-edit.component.html'
})
export class vCheckLikeUserEditComponent extends AbstractvCheckLikeUser implements OnInit, OnDestroy {
    vCheckLikeUser: vCheckLikeUser;
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
            this.vCheckLikeUserFormGroup = this.formBuilder.formGroup(vCheckLikeUser,t) as IFormGroup<vCheckLikeUser>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
