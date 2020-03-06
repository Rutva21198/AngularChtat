import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvCheckLikeUser } from '../domain/abstract-v-check-like-user';
import { vCheckLikeUser } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-v-check-like-user-list",
    templateUrl:'./v-check-like-user-list.component.html'
})
export class vCheckLikeUserListComponent extends AbstractvCheckLikeUser implements OnInit, OnDestroy {
    vCheckLikeUsers: List<vCheckLikeUser>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vCheckLikeUser>) => {
            this.vCheckLikeUsers = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
