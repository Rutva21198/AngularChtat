import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractFacebookUserWork } from '../domain/abstract-facebook-user-work';
import{Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { FacebookUserWork } from '@app/models';
import { FormGroup } from '@angular/forms';


@Component({
    selector: "app-facebook-user-work-edit",
    templateUrl: './facebook-user-work-edit.component.html'
})
export class FacebookUserWorkEditComponent extends AbstractFacebookUserWork implements OnInit, OnDestroy {
    facebookUserWork: FacebookUserWork;
    subscription: Subscription;
    id: number;
    result:any;
    isLoad:boolean;
    facebookUserWorkFormGroup: IFormGroup<FacebookUserWork>;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute,private router:Router) {
        super();
        //  this.get({params:[2],queryParams:{UserId:2}}).subscribe(res => {
        //     this.result = res;  }) 
        //     console.log(this.result); 
     
        this.activatedRoute.params.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.isLoad=false;
        this.get({ params: [2], queryParams:{UserWorkId:this.id }}).subscribe(r => {
            this.result=r;
           
            this.facebookUserWorkFormGroup = this.formBuilder.formGroup(FacebookUserWork,this.result) as IFormGroup<FacebookUserWork>;
            this.facebookUserWorkFormGroup.patchModelValue(this.result[0]);
            this.isLoad=true;
        })
        
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
   isshow=false;

    // Post()
    // {
    //        //     this.isshow=true;
    //         this.post({body: { workName:this.facebookUserWorkFormGroup.controls.workName.value,
    //             workDescription:this.facebookUserWorkFormGroup.controls.workDescription.value,
    //             workStartDate:this.facebookUserWorkFormGroup.controls.workStartDate.value,
    //             workEndDate:this.facebookUserWorkFormGroup.controls.workEndDate.value,UserId:2}}).subscribe(r=>{this.result=r});
    //         console.log(this.result);
    //         this.router.navigate(["/work"]);

    // }
    Edit()
    {
        this.put({params:[12],body:this.facebookUserWorkFormGroup.value}).subscribe(r=>{this.result=r});
                    console.log(this.result);
                    this.router.navigate(["facebook-user-works/add"]);

    }

}
