import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { PostShare } from '@app/models';
import { AbstractPostShare } from '../domain/abstract-post-share';

@Component({
    selector: "app-post-share-add",
    templateUrl: './post-share-add.component.html'
})
export class PostShareAddComponent extends AbstractPostShare implements OnInit, OnDestroy {
    postShare: PostShare;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.postShare = new PostShare();
        this.postShareFormGroup = this.formBuilder.formGroup(this.postShare) as IFormGroup<PostShare>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
