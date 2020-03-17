import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractPostMedia } from '../domain/abstract-post-media';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { PostMedia } from '@app/models';

@Component({
    selector: "app-post-media-edit",
    templateUrl: './post-media-edit.component.html'
})
export class PostMediaEditComponent extends AbstractPostMedia implements OnInit, OnDestroy {
    postMedia: PostMedia;
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
            this.postMediaFormGroup = this.formBuilder.formGroup(PostMedia,t) as IFormGroup<PostMedia>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
