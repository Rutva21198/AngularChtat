import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractFacebookUser } from '../domain/abstract-facebook-user';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { FacebookUser } from '@app/models';

@Component({
    selector: "app-facebook-user-edit",
    templateUrl: './facebook-user-edit.component.html'
})
export class FacebookUserEditComponent extends AbstractFacebookUser implements OnInit, OnDestroy {
    facebookUser: FacebookUser;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute,private router:Router ) {
        super();
        // this.activatedRoute.queryParams.subscribe(t => {
        //     this.id = t['id'];
        // })
    }

    ngOnInit(): void {
        // this.get({ params: [this.id] }).subscribe(t => {
        //     this.facebookUserFormGroup = this.formBuilder.formGroup(FacebookUser,t) as IFormGroup<FacebookUser>;
        // })
    }
   
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
