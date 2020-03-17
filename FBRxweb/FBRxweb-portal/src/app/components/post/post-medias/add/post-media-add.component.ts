import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { PostMedia } from '@app/models';
import { AbstractPostMedia } from '../domain/abstract-post-media';

@Component({
    selector: "app-post-media-add",
    templateUrl: './post-media-add.component.html'
})
export class PostMediaAddComponent extends AbstractPostMedia implements OnInit, OnDestroy {
    postMedia: PostMedia;
    
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.postMedia = new PostMedia();
        this.postMediaFormGroup = this.formBuilder.formGroup(this.postMedia) as IFormGroup<PostMedia>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
