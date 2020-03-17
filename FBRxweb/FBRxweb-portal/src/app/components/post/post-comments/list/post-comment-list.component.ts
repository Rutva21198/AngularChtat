import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractPostComment } from '../domain/abstract-post-comment';
import { PostComment } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-post-comment-list",
    templateUrl:'./post-comment-list.component.html'
})
export class PostCommentListComponent extends AbstractPostComment implements OnInit, OnDestroy {
    postComments: List<PostComment>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<PostComment>) => {
            this.postComments = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
