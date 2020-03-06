import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvCheckShareUser } from '../domain/abstract-v-check-share-user';
import { vCheckShareUser } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-v-check-share-user-list",
    templateUrl:'./v-check-share-user-list.component.html'
})
export class vCheckShareUserListComponent extends AbstractvCheckShareUser implements OnInit, OnDestroy {
    vCheckShareUsers: List<vCheckShareUser>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vCheckShareUser>) => {
            this.vCheckShareUsers = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
