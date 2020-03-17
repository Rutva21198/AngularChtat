import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractPostComment } from '../domain/abstract-post-comment';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { PostComment } from '@app/models';

@Component({
    selector: "app-post-comment-edit",
    templateUrl: './post-comment-edit.component.html'
})
export class PostCommentEditComponent extends AbstractPostComment implements OnInit, OnDestroy {
    postComment: PostComment;
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
            this.postCommentFormGroup = this.formBuilder.formGroup(PostComment,t) as IFormGroup<PostComment>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
