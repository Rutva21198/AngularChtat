import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import{Router} from '@angular/router';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { FacebookUserWork } from '@app/models';
import { AbstractFacebookUserWork } from '../domain/abstract-facebook-user-work';
import { List } from '@rxweb/generics';

@Component({
    selector: "app-facebook-user-work-add",
    templateUrl: './facebook-user-work-add.component.html'
})
export class FacebookUserWorkAddComponent extends AbstractFacebookUserWork implements OnInit, OnDestroy {
    facebookUserWork: FacebookUserWork;
    subscription: Subscription;
    result: any;
    //mj:any;
    facebookUserWorks:List<FacebookUserWork>;
    id: any;

    constructor(private formBuilder: RxFormBuilder, private router:Router) {
        super();
      
    }

    ngOnInit(): void {
        this.facebookUserWork = new FacebookUserWork();
        this.facebookUserWorkFormGroup = this.formBuilder.formGroup(this.facebookUserWork) as IFormGroup<FacebookUserWork>;
       //this.Get();
        //this.Post();
        // this.get({params:[2],queryParams:{UserId:2}}).subscribe(res => {
        //             this.result = res;  }) 
        //             console.log(this.result); 
       
    }
    GetBy(i:number)
    {   
        this.subscription = this.get({params:[i],queryParams:{UserId:this.id}}).subscribe((t: List<FacebookUserWork>) => {
            this.facebookUserWorks = t;
            console.log(this.id);
        })
    }
    Patch() {
        this.put({params:[2],body:{workName:"IIT",workDescription:"abc"}}).subscribe(res => {
            this.result = res;   
            console.log(this.result);     
        })
        
    }
    show=true;
    Post()
    {
           //     this.isshow=true;
            this.post({body: { workName:this.facebookUserWorkFormGroup.controls.workName.value,
                workDescription:this.facebookUserWorkFormGroup.controls.workDescription.value,
                workStartDate:this.facebookUserWorkFormGroup.controls.workStartDate.value,
                workEndDate:this.facebookUserWorkFormGroup.controls.workEndDate.value,UserId:this.id}}).subscribe(r=>{this.result=r});
            console.log(this.result);
            this.router.navigate(["/work"]);

    }

    // isshow=false;

    // Post()
    // {
    //             this.isshow=true;
    //         this.post({body: { workName:this.facebookUserWorkFormGroup.controls.workName.value} }).subscribe(r=>{this.mj=r});
    //         console.log(this.mj);

    // }
    hide=false;
    form()
    {
        this.show=false;
        this.hide=true;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
