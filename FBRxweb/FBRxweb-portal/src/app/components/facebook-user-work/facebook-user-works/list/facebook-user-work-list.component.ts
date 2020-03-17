import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractFacebookUserWork } from '../domain/abstract-facebook-user-work';
import { FacebookUserWork } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-facebook-user-work-list",
    templateUrl:'./facebook-user-work-list.component.html'
})
export class FacebookUserWorkListComponent extends AbstractFacebookUserWork implements OnInit, OnDestroy {
    facebookUserWorks: List<FacebookUserWork>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<FacebookUserWork>) => {
            this.facebookUserWorks = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
