import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractPostMessage } from '../domain/abstract-post-message';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { PostMessage } from '@app/models';

@Component({
    selector: "app-post-message-edit",
    templateUrl: './post-message-edit.component.html'
})
export class PostMessageEditComponent extends AbstractPostMessage implements OnInit, OnDestroy {
    postMessage: PostMessage;
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
            this.postMessageFormGroup = this.formBuilder.formGroup(PostMessage,t) as IFormGroup<PostMessage>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
