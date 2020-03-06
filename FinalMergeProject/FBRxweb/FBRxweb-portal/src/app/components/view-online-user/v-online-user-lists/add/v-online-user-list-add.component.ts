import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vOnlineUserList } from '@app/models';
import { AbstractvOnlineUserList } from '../domain/abstract-v-online-user-list';

@Component({
    selector: "app-v-online-user-list-add",
    templateUrl: './v-online-user-list-add.component.html'
})
export class vOnlineUserListAddComponent extends AbstractvOnlineUserList implements OnInit, OnDestroy {
    vOnlineUserList: vOnlineUserList;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.vOnlineUserList = new vOnlineUserList();
        this.vOnlineUserListFormGroup = this.formBuilder.formGroup(this.vOnlineUserList) as IFormGroup<vOnlineUserList>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
