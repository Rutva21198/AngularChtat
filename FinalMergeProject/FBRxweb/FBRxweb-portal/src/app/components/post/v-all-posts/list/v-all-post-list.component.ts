import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvAllPost } from '../domain/abstract-v-all-post';
import { vAllPost, PostLike, PostComment } from "@app/models";
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';
import { anonymous } from '@rxweb/angular-router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { RxHttp } from '@rxweb/http';
@Component({
    selector:"app-v-all-post-list",
    templateUrl:'./v-all-post-list.component.html'
})

export class vAllPostListComponent extends AbstractvAllPost implements OnInit, OnDestroy {
    vAllPosts: List<vAllPost>;
    postLike:PostLike;
    result:any;
    postId:any;
    postComment:PostComment;
    createComment:FormGroup;
    display:boolean=false;
constructor(private router:Router,private formBuilder:FormBuilder,private http:RxHttp){
    super();
}
    ngOnInit(): void {
        // this.postComment=new PostComment();
        // console.log("hello");
        // this.http.get({hostUri:'https://localhost:44352',path:'api/vAllPosts'}).subscribe((t: List<vAllPost>)=>{
        //     console.log(t);
        //     this.vAllPosts = t;
        //     this.postId=vAllPost;
        // })

        if (!localStorage.getItem('foo')) { 
            localStorage.setItem('foo', 'no reload') 
            location.reload() 
          } else {
            localStorage.removeItem('foo') 
          }
        
        this.get().subscribe((t: List<vAllPost>) => {
            this.vAllPosts = t;
            this.postId=vAllPost;
            console.log("hello");
            this.display=true;
        })
        console.log("hello");
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
        this.post({path:"api/PostLikes",body:{UserId:localStorage.getItem('userId'),PostId:postId}}).subscribe(res =>{
             this.result=res;
             console.log(this.result);
             this.selectorDisplayLike = true;
        })
        this.router.navigate(["/v-check-like-users",postId]);
        
    }
    commentButton(postId:any){
        this.post({path:"api/PostComments",body:{Comment:this.createComment.controls.comment.value,UserId:localStorage.getItem('userId'),PostId:postId}}).subscribe(res =>{
            this.result=res;
            console.log(this.result);
            this.selectorDisplayComment = true;
             } )
             this.router.navigate(["/v-check-comment-users",postId]);
     }
    shareButton(postId:any){
        this.post({path:"api/PostShares",body:{UserId:localStorage.getItem('userId'),PostId:postId}}).subscribe(res =>{
            this.result=res;
            console.log(this.result);
            this.selectorDisplayShare = true;
        } ) 
        this.router.navigate(["/v-check-share-users",postId]);
    }

  //  console.log(JSON.parse(sessionStorage.getItem('userData')).userID);

                                  

        // this.get({ params:[1], queryParams:{Email:this.facebookLoginFormGroup.controls.MobileNoEmail.value,
        //     Password:this.facebookLoginFormGroup.controls.password.value}}).subscribe(res => {
        //         this.result = res;

    ngOnDestroy(): void {
      
    }

}
