import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractPostMessage } from '../domain/abstract-post-message';
import { PostMessage } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-post-message-list",
    templateUrl:'./post-message-list.component.html'
})
export class PostMessageListComponent extends AbstractPostMessage implements OnInit, OnDestroy {
    postMessages: List<PostMessage>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<PostMessage>) => {
            this.postMessages = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
