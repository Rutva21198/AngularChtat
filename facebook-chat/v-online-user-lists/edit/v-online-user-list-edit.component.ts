import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvOnlineUserList } from '../domain/abstract-v-online-user-list';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vOnlineUserList } from '@app/models';

@Component({
    selector: "app-v-online-user-list-edit",
    templateUrl: './v-online-user-list-edit.component.html'
})
export class vOnlineUserListEditComponent extends AbstractvOnlineUserList implements OnInit, OnDestroy {
    vOnlineUserList: vOnlineUserList;
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
            this.vOnlineUserListFormGroup = this.formBuilder.formGroup(vOnlineUserList,t) as IFormGroup<vOnlineUserList>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
