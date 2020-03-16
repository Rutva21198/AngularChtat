import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvCheckLikeUser } from '../domain/abstract-v-check-like-user';
import { vCheckLikeUser } from "@app/models";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { anonymous } from '@rxweb/angular-router';
@anonymous()
@Component({
    selector:"app-v-check-like-user-list",
    templateUrl:'./v-check-like-user-list.component.html'
})
export class vCheckLikeUserListComponent extends AbstractvCheckLikeUser implements OnInit, OnDestroy {
    vCheckLikeUsers: List<vCheckLikeUser>;
    subscription: Subscription;
    result:any;
    id:any;
    constructor (private activatedRoute:ActivatedRoute){
super();
    }
    ngOnInit(): void {
        this.GetById(this.activatedRoute.snapshot.paramMap.get('id'));
        this.id=this.activatedRoute.snapshot.paramMap.get('id');
        // this.subscription = this.get().subscribe((t: List<vCheckLikeUser>) => {
        //     this.vCheckLikeUsers = t;
            // this.show();
        // })
        if (!localStorage.getItem('foolike')) { 
            localStorage.setItem('foolike', 'no reload') 
            location.reload() 
          } else {
            localStorage.removeItem('foolike') 
          }
    }
    GetById(id:any){
        this.get({params:[id], queryParams:{PostId:id}}).subscribe(  res=>{
                  this.result=res;
                  console.log(this.result);
                })
                  
    }
    // show(){

    //     this.get({params:[1], queryParams:{UserName:"gagan",PostId:4}}).subscribe(  res=>{
    //         this.result=res;})
    //         console.log(this.result);
       
    //     }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
