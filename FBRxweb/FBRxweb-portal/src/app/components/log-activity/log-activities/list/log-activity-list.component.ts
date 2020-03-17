import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractLogActivity } from '../domain/abstract-log-activity';
import { LogActivity } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-log-activity-list",
    templateUrl:'./log-activity-list.component.html'
})
export class LogActivityListComponent extends AbstractLogActivity implements OnInit, OnDestroy {
    logActivities: List<LogActivity>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<LogActivity>) => {
            this.logActivities = t;
        })
        
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
