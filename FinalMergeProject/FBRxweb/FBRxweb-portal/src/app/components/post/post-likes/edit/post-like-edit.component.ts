import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractPostLike } from '../domain/abstract-post-like';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { PostLike } from '@app/models';

@Component({
    selector: "app-post-like-edit",
    templateUrl: './post-like-edit.component.html'
})
export class PostLikeEditComponent extends AbstractPostLike implements OnInit, OnDestroy {
    postLike: PostLike;
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
            this.postLikeFormGroup = this.formBuilder.formGroup(PostLike,t) as IFormGroup<PostLike>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
