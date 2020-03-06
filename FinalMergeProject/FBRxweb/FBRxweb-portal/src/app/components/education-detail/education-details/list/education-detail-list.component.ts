import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractEducationDetail } from '../domain/abstract-education-detail';
import { EducationDetail } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-education-detail-list",
    templateUrl:'./education-detail-list.component.html'
})
export class EducationDetailListComponent extends AbstractEducationDetail implements OnInit, OnDestroy {
    educationDetails: List<EducationDetail>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<EducationDetail>) => {
            this.educationDetails = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
