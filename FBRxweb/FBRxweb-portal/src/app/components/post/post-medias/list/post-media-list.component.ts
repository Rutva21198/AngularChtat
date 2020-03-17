import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractPostMedia } from '../domain/abstract-post-media';
import { PostMedia } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-post-media-list",
    templateUrl:'./post-media-list.component.html'
})
export class PostMediaListComponent extends AbstractPostMedia implements OnInit, OnDestroy {
    postMedias: List<PostMedia>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<PostMedia>) => {
            this.postMedias = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
