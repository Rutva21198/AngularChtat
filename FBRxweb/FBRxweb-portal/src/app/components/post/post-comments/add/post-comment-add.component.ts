import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { PostComment } from '@app/models';
import { AbstractPostComment } from '../domain/abstract-post-comment';

@Component({
    selector: "app-post-comment-add",
    templateUrl: './post-comment-add.component.html'
})
export class PostCommentAddComponent extends AbstractPostComment implements OnInit, OnDestroy {
    postComment: PostComment;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.postComment = new PostComment();
        this.postCommentFormGroup = this.formBuilder.formGroup(this.postComment) as IFormGroup<PostComment>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
