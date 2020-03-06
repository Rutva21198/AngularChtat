import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import {Router} from '@angular/router'
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { EducationDetail } from '@app/models';
import { AbstractEducationDetail } from '../domain/abstract-education-detail';
import { List } from '@rxweb/generics';

@Component({
    selector: "app-education-detail-add",
    templateUrl: './education-detail-add.component.html'
})
export class EducationDetailAddComponent extends AbstractEducationDetail implements OnInit, OnDestroy {
    educationDetail: EducationDetail;
    subscription: Subscription;
    educationDetails:List<EducationDetail>;
    result:any;
    id:number;

    constructor(private formBuilder: RxFormBuilder,private router:Router) {
        super();
        // this.get({params:[1],queryParams:{UserId:1}}).subscribe(res => {
        //     this.result = res;  }) 
        //     console.log(this.result); 
    }

    ngOnInit(): void {
        this.educationDetail = new EducationDetail();
        this.educationDetailFormGroup = this.formBuilder.formGroup(this.educationDetail) as IFormGroup<EducationDetail>;
     //   this.Get();
      //  this.Save();
    }
    hide=false;
    // Get()
    // {
    //         this.get().subscribe(res=>{
    //             this.result=res;
    //             console.log(this.result);
            
    //         });
    // }
    show=true;
    ADD()
    {
this.show=false;
this.hide=true;

       // this.router.navigate(["/addEducation"])
    }
    Save()
    {
        this.post({body:{courseName:this.educationDetailFormGroup.controls.courseName.value,
            collegeSchoolName:this.educationDetailFormGroup.controls.collegeSchoolName.value
            ,universityBoardName:this.educationDetailFormGroup.controls.universityBoardName.value,
            city:this.educationDetailFormGroup.controls.city.value,
            courseStartDate:this.educationDetailFormGroup.controls.courseStartDate.value,
            courseEndDate:this.educationDetailFormGroup.controls.courseEndDate.value,
            UserId:this.id,SchoolCollegeAO:9}}).subscribe(res=>{this.result=res;
           
        });
        console.log(this.result);
        console.log(this.id);
        this.router.navigate(["/education-details/add"]);
    } 
    GetBy(i:number)
    {   
        this.subscription = this.get({params:[i],queryParams:{UserId:this.id}}).subscribe((t: List<EducationDetail>) => {
            this.educationDetails = t;
            console.log(this.id);
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
