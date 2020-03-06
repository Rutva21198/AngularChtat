import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import {Router, RouterLink} from "@angular/router";

import { RxFormBuilder,RxwebValidators, IFormGroup } from '@rxweb/reactive-form-validators';

import { FacebookUser } from '@app/models';

import { AbstractFacebookUser } from '../domain/abstract-facebook-user';
import { FormGroup, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { anonymous } from '@rxweb/angular-router';

@anonymous()
@Component({
    selector: "app-facebook-user-add",
    templateUrl: './facebook-user-add.component.html'
})
export class FacebookUserAddComponent extends AbstractFacebookUser implements OnInit, OnDestroy {
    facebookUser: FacebookUser;
    subscription: Subscription;
    result: any;
    //fbRegisterFormGroup:FormGroup;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.facebookUser = new FacebookUser();
        this.facebookUserFormGroup = this.formBuilder.formGroup(this.facebookUser) as IFormGroup<FacebookUser>;
        // this.fbRegisterFormGroup=this.formBuilder.group({
        //     firstName:['',Validators.required],
        //     lastName:['',Validators.required],
        //     emailorMobno:['',Validators.required],
        //     password:['',Validators.required],
        //     dob:['',Validators.required],
        //     gender:['',Validators.required],
            //,createdDateTime:"2019-01-02"
        // })
    
    }
   
    submit(){
        
        this.post({ body: { firstName: this.facebookUserFormGroup.controls.firstName.value, lastName:this.facebookUserFormGroup.controls.lastName.value, 
            mobileNo:this.facebookUserFormGroup.controls.mobileNo.value,email:this.facebookUserFormGroup.controls.email.value,password:this.facebookUserFormGroup.controls.password.value
           , dateOfBirth:this.facebookUserFormGroup.controls.dateOfBirth.value,genderAO:this.facebookUserFormGroup.controls.genderAO.value }
         }).subscribe(res => {
            
        })
        // if((this.fbRegisterFormGroup.controls.firstName.value=="")&&(this.fbRegisterFormGroup.controls.lastName.value=="")&&(this.fbRegisterFormGroup.controls.dob.value=="")&&(this.fbRegisterFormGroup.controls.gender.value=="")&&(this.fbRegisterFormGroup.controls.emailorMobno.value=="")&&(this.fbRegisterFormGroup.controls.password.value==""))
        // {
        //   alert("Please Enter details");
        // }
        // else
        // { 
        //   let user = {userId:this.fbRegisterFormGroup.value.userId, firstName:this.fbRegisterFormGroup.value.firstName, lastName: this.fbRegisterFormGroup.value.lastName};
        //     localStorage.setItem(this.fbRegisterFormGroup.value.userId,JSON.stringify(user));
        //     console.log(localStorage);
        //     // this.router.navigate(["/user"]);
        //      }

          console.log(this.facebookUserFormGroup.value);
        console.log()
        } 

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
