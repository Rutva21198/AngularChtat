import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvCheckCommentUser } from '../domain/abstract-v-check-comment-user';
import { vCheckCommentUser } from "@app/models";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { anonymous } from '@rxweb/angular-router';
@anonymous()
@Component({
    selector:"app-v-check-comment-user-list",
    templateUrl:'./v-check-comment-user-list.component.html'
})
export class vCheckCommentUserListComponent extends AbstractvCheckCommentUser implements OnInit, OnDestroy {
    vCheckCommentUsers: List<vCheckCommentUser>;
    subscription: Subscription;
   
    result:any;
    id:any;
    constructor (private activatedRoute:ActivatedRoute){
   super()
    }

    ngOnInit(): void {
        // this.subscription = this.get().subscribe((t: List<vCheckCommentUser>) => {
        //     this.vCheckCommentUsers = t;
        // })
        this.GetById(this.activatedRoute.snapshot.paramMap.get('id'));
        this.id=this.activatedRoute.snapshot.paramMap.get('id');
        if (!localStorage.getItem('foocomment')) { 
            localStorage.setItem('foocomment', 'no reload') 
            location.reload() 
          } else {
            localStorage.removeItem('foocomment') 
          }
    }
    GetById(id:any){
        this.get({params:[id], queryParams:{PostId:id}}).subscribe(  res=>{
                  this.result=res;
                  console.log(this.result);
                })

            }
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
