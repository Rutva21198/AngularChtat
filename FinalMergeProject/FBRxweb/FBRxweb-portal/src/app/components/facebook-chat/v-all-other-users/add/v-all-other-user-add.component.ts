import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vAllOtherUser } from '@app/models';
import { AbstractvAllOtherUser } from '../domain/abstract-v-all-other-user';

@Component({
    selector: "app-v-all-other-user-add",
    templateUrl: './v-all-other-user-add.component.html'
})
export class vAllOtherUserAddComponent extends AbstractvAllOtherUser implements OnInit, OnDestroy {
    vAllOtherUser: vAllOtherUser;
    subscription: Subscription;
    result:any;
    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.vAllOtherUser = new vAllOtherUser();
      //  this.vAllOtherUserFormGroup = this.formBuilder.formGroup(this.vAllOtherUser) as IFormGroup<vAllOtherUser>;
        let id=localStorage.getItem('userId')
        this.get({params:[id],queryParams:{userId:id}}).subscribe((t: any) => {
            this.result=t;
            console.log(this.result);
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
