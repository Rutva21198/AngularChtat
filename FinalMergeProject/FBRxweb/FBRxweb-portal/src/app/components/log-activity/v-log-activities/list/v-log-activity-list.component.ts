import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvLogActivity } from '../domain/abstract-v-log-activity';
import { vLogActivity } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-v-log-activity-list",
    templateUrl:'./v-log-activity-list.component.html'
})
export class vLogActivityListComponent extends AbstractvLogActivity implements OnInit, OnDestroy {
    vLogActivities: List<vLogActivity>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vLogActivity>) => {
            this.vLogActivities = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
