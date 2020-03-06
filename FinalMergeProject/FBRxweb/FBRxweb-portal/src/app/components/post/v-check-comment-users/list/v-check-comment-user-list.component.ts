import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvCheckCommentUser } from '../domain/abstract-v-check-comment-user';
import { vCheckCommentUser } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-v-check-comment-user-list",
    templateUrl:'./v-check-comment-user-list.component.html'
})
export class vCheckCommentUserListComponent extends AbstractvCheckCommentUser implements OnInit, OnDestroy {
    vCheckCommentUsers: List<vCheckCommentUser>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vCheckCommentUser>) => {
            this.vCheckCommentUsers = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
