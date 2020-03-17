import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractFacebookUser } from '../domain/abstract-facebook-user';
import { FacebookUser } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-facebook-user-list",
    templateUrl:'./facebook-user-list.component.html'
})
export class FacebookUserListComponent extends AbstractFacebookUser implements OnInit, OnDestroy {
    facebookUsers: List<FacebookUser>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<FacebookUser>) => {
            this.facebookUsers = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
