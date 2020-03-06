import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvAllPost } from '../domain/abstract-v-all-post';
import { vAllPost, PostLike, PostComment } from "@app/models";
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';
import { anonymous } from '@rxweb/angular-router';
import { FormGroup,FormBuilder } from '@angular/forms';
@anonymous()
@Component({
    selector:"app-v-all-post-list",
    templateUrl:'./v-all-post-list.component.html'
})
export class vAllPostListComponent extends AbstractvAllPost implements OnInit, OnDestroy {
    vAllPosts: List<vAllPost>;
    subscription: Subscription;
    postLike:PostLike;
    result:any;
    postId:any;
    postComment:PostComment;
    createComment:FormGroup;
constructor(private router:Router,private formBuilder:FormBuilder){
    super();
}
    ngOnInit(): void {
        this.postComment=new PostComment();
        this.subscription = this.get().subscribe((t: List<vAllPost>) => {
            this.vAllPosts = t;
            this.postId=vAllPost;
            console.log(this.postId);
        })
        this.createComment=this.formBuilder.group({
            comment:[],
            UserId:[],
            PostId:[]
        })

    }
    createPost(){
            this.router.navigate(["/v-all-posts/add"])
           // this.router.navigate(["/v-all-posts/:id"])
    }
    selectorDisplayLike=false;
    selectorDisplayComment=false;
    selectorDisplayShare=false;
    likeButton(postId:any){
        this.post({path:"api/PostLikes",body:{UserId:JSON.parse(sessionStorage.getItem('userData')).userID,PostId:postId}}).subscribe(res =>{
             this.result=res;
             console.log(this.result);
             this.selectorDisplayLike = true;
        })
    }
    commentButton(postId:any){
        this.post({path:"api/PostComments",body:{Comment:this.createComment.controls.comment.value,UserId:JSON.parse(sessionStorage.getItem('userData')).userID,PostId:postId}}).subscribe(res =>{
            this.result=res;
            console.log(this.result);
            this.selectorDisplayComment = true;
    } ) }
    shareButton(postId:any){
        this.post({path:"api/PostShares",body:{UserId:JSON.parse(sessionStorage.getItem('userData')).userID,PostId:postId}}).subscribe(res =>{
            this.result=res;
            console.log(this.result);
            this.selectorDisplayShare = true;
        } ) }

  //  console.log(JSON.parse(sessionStorage.getItem('userData')).userID);

                                  

        // this.get({ params:[1], queryParams:{Email:this.facebookLoginFormGroup.controls.MobileNoEmail.value,
        //     Password:this.facebookLoginFormGroup.controls.password.value}}).subscribe(res => {
        //         this.result = res;

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
