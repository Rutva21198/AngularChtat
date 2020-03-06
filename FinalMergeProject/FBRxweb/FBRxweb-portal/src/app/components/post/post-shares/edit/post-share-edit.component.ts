import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractPostShare } from '../domain/abstract-post-share';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { PostShare } from '@app/models';

@Component({
    selector: "app-post-share-edit",
    templateUrl: './post-share-edit.component.html'
})
export class PostShareEditComponent extends AbstractPostShare implements OnInit, OnDestroy {
    postShare: PostShare;
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
            this.postShareFormGroup = this.formBuilder.formGroup(PostShare,t) as IFormGroup<PostShare>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
