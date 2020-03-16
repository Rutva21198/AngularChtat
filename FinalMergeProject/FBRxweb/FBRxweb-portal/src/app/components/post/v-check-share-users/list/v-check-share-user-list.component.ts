import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvCheckShareUser } from '../domain/abstract-v-check-share-user';
import { vCheckShareUser } from "@app/models";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { anonymous } from '@rxweb/angular-router';
@anonymous()
@Component({
    selector:"app-v-check-share-user-list",
    templateUrl:'./v-check-share-user-list.component.html'
})
export class vCheckShareUserListComponent extends AbstractvCheckShareUser implements OnInit, OnDestroy {
    vCheckShareUsers: List<vCheckShareUser>;
    subscription: Subscription;

    result:any;
    id:any;
    constructor (private activatedRoute:ActivatedRoute){
   super()
    }
    ngOnInit(): void {
        // this.subscription = this.get().subscribe((t: List<vCheckShareUser>) => {
        //     this.vCheckShareUsers = t;
        this.GetById(this.activatedRoute.snapshot.paramMap.get('id'));
        this.id=this.activatedRoute.snapshot.paramMap.get('id');
        if (!localStorage.getItem('fooshare')) { 
            localStorage.setItem('fooshare', 'no reload') 
            location.reload() 
          } else {
            localStorage.removeItem('fooshare') 
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
