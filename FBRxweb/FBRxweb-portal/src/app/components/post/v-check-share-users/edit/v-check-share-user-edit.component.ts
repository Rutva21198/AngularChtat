import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvCheckShareUser } from '../domain/abstract-v-check-share-user';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vCheckShareUser } from '@app/models';

@Component({
    selector: "app-v-check-share-user-edit",
    templateUrl: './v-check-share-user-edit.component.html'
})
export class vCheckShareUserEditComponent extends AbstractvCheckShareUser implements OnInit, OnDestroy {
    vCheckShareUser: vCheckShareUser;
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
            this.vCheckShareUserFormGroup = this.formBuilder.formGroup(vCheckShareUser,t) as IFormGroup<vCheckShareUser>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
