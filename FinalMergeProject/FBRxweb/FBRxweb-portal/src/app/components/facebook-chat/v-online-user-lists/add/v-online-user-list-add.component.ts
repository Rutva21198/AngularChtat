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
    result : any;
    constructor(private formBuilder: RxFormBuilder) {
        super();
        this.get().subscribe(res => {
            
            this.result = res;
           
        })
    }

    ngOnInit(): void {
        this.vOnlineUserList = new vOnlineUserList();
        this.vOnlineUserListFormGroup = this.formBuilder.formGroup(this.vOnlineUserList) as IFormGroup<vOnlineUserList>;
        this.get().subscribe(res => {
            console.log(res);
            this.result = res;
            console.log("Hello");
        })
      //  console.log(this.result);
      console.log("Hxcgffb")
    }
   

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
