import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { PostMessage } from '@app/models';
import { AbstractPostMessage } from '../domain/abstract-post-message';

@Component({
    selector: "app-post-message-add",
    templateUrl: './post-message-add.component.html'
})
export class PostMessageAddComponent extends AbstractPostMessage implements OnInit, OnDestroy {
    postMessage: PostMessage;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.postMessage = new PostMessage();
        this.postMessageFormGroup = this.formBuilder.formGroup(this.postMessage) as IFormGroup<PostMessage>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
