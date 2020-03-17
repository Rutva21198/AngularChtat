import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import{Router} from '@angular/router';
import { RxFormBuilder, IFormGroup, RxwebValidators } from '@rxweb/reactive-form-validators';

import { FacebookUserWork } from '@app/models';
import { AbstractFacebookUserWork } from '../domain/abstract-facebook-user-work';
import { List } from '@rxweb/generics';
import { FormGroup} from '@angular/forms';

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
  
    facebookUserWorkFormGroup: IFormGroup<FacebookUserWork>;
 //  FacebookUserWorkFormGroup:FormGroup;

    constructor(private formBuilder: RxFormBuilder, private router:Router) {
        super();
      
    }

    ngOnInit(): void {
        this.facebookUserWork = new FacebookUserWork();
        this.facebookUserWorkFormGroup = this.formBuilder.formGroup(this.facebookUserWork) as IFormGroup<FacebookUserWork>;
      //  this.facebookUserWorkFormGroup.patchModelValue(this.result);

      this.subscription = this.get({params:[localStorage.getItem('userId')],
      queryParams:{UserId:localStorage.getItem('userId')}}).subscribe((t: List<FacebookUserWork>) => {
        this.facebookUserWorks = t;
        console.log(localStorage.getItem('userId'));
        // location.reload();
    })
    // this.subscription = this.get({params:[localStorage.getItem('userId')],queryParams:{UserId:localStorage.getItem('userId')}}).subscribe((t: List<FacebookUserWork>) => {
    //     this.facebookUserWorks = t; });
    // console.log(localStorage.getItem('userId')); 
    }
 
    Patch(userWorkId:any) {
      //  this.show=false;
        this.put({params:[userWorkId],body:this.facebookUserWorkFormGroup.value}).subscribe(res => {
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
                workEndDate:this.facebookUserWorkFormGroup.controls.workEndDate.value,UserId:localStorage.getItem('userId')}}).subscribe(r=>{this.result=r
            console.log(this.result);
        });
            //location.reload();
           // this.router.navigate(["/work"]);

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
    Delete(userWorkId:any)
    {
           this.delete({params:[userWorkId],queryParams:{UserWorkId:userWorkId},body:{}}).subscribe(r=>{this.result=r});
           console.log(this.result);
    }
//    Edit(userWorkId)
//    {

    
//     this.router.navigate(["/facebook-user-works/edit"]);


//    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
