import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractChatMedia } from '../domain/abstract-chat-media';
import { ChatMedia } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-chat-media-list",
    templateUrl:'./chat-media-list.component.html'
})
export class ChatMediaListComponent extends AbstractChatMedia implements OnInit, OnDestroy {
    chatMedias: List<ChatMedia>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<ChatMedia>) => {
            this.chatMedias = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
