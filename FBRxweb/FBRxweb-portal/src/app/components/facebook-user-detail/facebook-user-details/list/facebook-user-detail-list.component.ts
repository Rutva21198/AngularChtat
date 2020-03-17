import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractFacebookUserDetail } from '../domain/abstract-facebook-user-detail';
import { FacebookUserDetail } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-facebook-user-detail-list",
    templateUrl:'./facebook-user-detail-list.component.html'
})
export class FacebookUserDetailListComponent extends AbstractFacebookUserDetail implements OnInit, OnDestroy {
    facebookUserDetails: List<FacebookUserDetail>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<FacebookUserDetail>) => {
            this.facebookUserDetails = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
