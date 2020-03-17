import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vCheckCommentUser } from '@app/models';
import { AbstractvCheckCommentUser } from '../domain/abstract-v-check-comment-user';

@Component({
    selector: "app-v-check-comment-user-add",
    templateUrl: './v-check-comment-user-add.component.html'
})
export class vCheckCommentUserAddComponent extends AbstractvCheckCommentUser implements OnInit, OnDestroy {
    vCheckCommentUser: vCheckCommentUser;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.vCheckCommentUser = new vCheckCommentUser();
        this.vCheckCommentUserFormGroup = this.formBuilder.formGroup(this.vCheckCommentUser) as IFormGroup<vCheckCommentUser>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
