import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractPostShare } from '../domain/abstract-post-share';
import { PostShare } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-post-share-list",
    templateUrl:'./post-share-list.component.html'
})
export class PostShareListComponent extends AbstractPostShare implements OnInit, OnDestroy {
    postShares: List<PostShare>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<PostShare>) => {
            this.postShares = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
