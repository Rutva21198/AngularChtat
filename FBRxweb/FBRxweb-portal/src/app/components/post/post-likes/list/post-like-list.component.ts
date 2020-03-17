import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractPostLike } from '../domain/abstract-post-like';
import { PostLike } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-post-like-list",
    templateUrl:'./post-like-list.component.html'
})
export class PostLikeListComponent extends AbstractPostLike implements OnInit, OnDestroy {
    postLikes: List<PostLike>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<PostLike>) => {
            this.postLikes = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
