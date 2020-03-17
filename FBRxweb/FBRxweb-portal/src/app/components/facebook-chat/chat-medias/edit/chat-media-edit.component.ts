import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractChatMedia } from '../domain/abstract-chat-media';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { ChatMedia } from '@app/models';

@Component({
    selector: "app-chat-media-edit",
    templateUrl: './chat-media-edit.component.html'
})
export class ChatMediaEditComponent extends AbstractChatMedia implements OnInit, OnDestroy {
    chatMedia: ChatMedia;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.chatMediaFormGroup = this.formBuilder.formGroup(ChatMedia,t) as IFormGroup<ChatMedia>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
