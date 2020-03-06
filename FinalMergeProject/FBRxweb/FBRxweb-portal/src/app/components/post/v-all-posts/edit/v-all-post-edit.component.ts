import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvAllPost } from '../domain/abstract-v-all-post';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vAllPost } from '@app/models';

@Component({
    selector: "app-v-all-post-edit",
    templateUrl: './v-all-post-edit.component.html'
})
export class vAllPostEditComponent extends AbstractvAllPost implements OnInit, OnDestroy {
    vAllPost: vAllPost;
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
            this.vAllPostFormGroup = this.formBuilder.formGroup(vAllPost,t) as IFormGroup<vAllPost>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
