import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { PostLike } from '@app/models';
import { AbstractPostLike } from '../domain/abstract-post-like';

@Component({
    selector: "app-post-like-add",
    templateUrl: './post-like-add.component.html'
})
export class PostLikeAddComponent extends AbstractPostLike implements OnInit, OnDestroy {
    postLike: PostLike;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.postLike = new PostLike();
        this.postLikeFormGroup = this.formBuilder.formGroup(this.postLike) as IFormGroup<PostLike>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
