import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvAllOtherUser } from '../domain/abstract-v-all-other-user';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vAllOtherUser } from '@app/models';

@Component({
    selector: "app-v-all-other-user-edit",
    templateUrl: './v-all-other-user-edit.component.html'
})
export class vAllOtherUserEditComponent extends AbstractvAllOtherUser implements OnInit, OnDestroy {
    vAllOtherUser: vAllOtherUser;
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
            this.vAllOtherUserFormGroup = this.formBuilder.formGroup(vAllOtherUser,t) as IFormGroup<vAllOtherUser>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
