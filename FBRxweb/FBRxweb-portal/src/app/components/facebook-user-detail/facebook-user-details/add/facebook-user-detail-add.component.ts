import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { FacebookUserDetail } from '@app/models';
import { AbstractFacebookUserDetail } from '../domain/abstract-facebook-user-detail';

@Component({
    selector: "app-facebook-user-detail-add",
    templateUrl: './facebook-user-detail-add.component.html'
})
export class FacebookUserDetailAddComponent extends AbstractFacebookUserDetail implements OnInit, OnDestroy {
    facebookUserDetail: FacebookUserDetail;
    subscription: Subscription;
    result:any;
    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.facebookUserDetail = new FacebookUserDetail();
        this.facebookUserDetailFormGroup = this.formBuilder.formGroup(this.facebookUserDetail) as IFormGroup<FacebookUserDetail>;
    }
    Post(){
        this.post({body: { bio:this.facebookUserDetailFormGroup.controls.bio.value,
            currentCity:this.facebookUserDetailFormGroup.controls.currentCity.value,
            homeTown:this.facebookUserDetailFormGroup.controls.homeTown.value,
            relationshipAO:this.facebookUserDetailFormGroup.controls.relationshipAO.value,UserId:localStorage.getItem('userId')}}).subscribe
            (r=>{this.result=r});
        console.log(this.result);

    }
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
