import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvUserProfile } from '../domain/abstract-v-user-profile';
import { vUserProfile } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-v-user-profile-list",
    templateUrl:'./v-user-profile-list.component.html'
})
export class vUserProfileListComponent extends AbstractvUserProfile implements OnInit, OnDestroy {
    vUserProfiles: List<vUserProfile>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vUserProfile>) => {
            this.vUserProfiles = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
