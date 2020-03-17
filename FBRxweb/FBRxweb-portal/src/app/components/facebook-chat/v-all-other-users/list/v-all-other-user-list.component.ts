import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvAllOtherUser } from '../domain/abstract-v-all-other-user';
import { vAllOtherUser } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-v-all-other-user-list",
    templateUrl:'./v-all-other-user-list.component.html'
})
export class vAllOtherUserListComponent extends AbstractvAllOtherUser implements OnInit, OnDestroy {
    vAllOtherUsers: List<vAllOtherUser>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vAllOtherUser>) => {
            this.vAllOtherUsers = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
