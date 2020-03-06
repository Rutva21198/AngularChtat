import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vCheckShareUser } from '@app/models';
import { AbstractvCheckShareUser } from '../domain/abstract-v-check-share-user';

@Component({
    selector: "app-v-check-share-user-add",
    templateUrl: './v-check-share-user-add.component.html'
})
export class vCheckShareUserAddComponent extends AbstractvCheckShareUser implements OnInit, OnDestroy {
    vCheckShareUser: vCheckShareUser;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.vCheckShareUser = new vCheckShareUser();
        this.vCheckShareUserFormGroup = this.formBuilder.formGroup(this.vCheckShareUser) as IFormGroup<vCheckShareUser>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
