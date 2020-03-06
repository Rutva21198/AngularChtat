import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder,RxFormGroup, IFormGroup } from '@rxweb/reactive-form-validators';

import { vAllPost,PostMessage, PostMedia, PostLike, PostComment } from '@app/models';
import { AbstractvAllPost } from '../domain/abstract-v-all-post';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { anonymous } from '@rxweb/angular-router';
import { List } from '@rxweb/generics';
@anonymous()
@Component({
    selector: "app-v-all-post-add",
    templateUrl: './v-all-post-add.component.html'
})
export class vAllPostAddComponent extends AbstractvAllPost implements OnInit, OnDestroy {
    vAllPost: vAllPost;
    vAllPosts: List<vAllPost>;
    subscription: Subscription;
    result:any;
    createPost:FormGroup;
    postMessageFormGroup:FormGroup;
    postMediaFormGroup:FormGroup;
    postMedia: PostMedia;
    postMessage:PostMessage;
    createComment:FormGroup;
    postLike:PostLike;
   
    postId:any;
    postComment:PostComment;
   

    constructor(private formBuilder: RxFormBuilder) {
        
        super();

    }

    ngOnInit(): void {
        this.vAllPost = new vAllPost();
        this.postMedia = new PostMedia();
        this.postMessage=new PostMessage();
        this.postLike=new PostLike();
        this.postComment=new PostComment();
        this.subscription = this.get().subscribe((t: List<vAllPost>) => {
            this.vAllPosts = t;
            this.postId=vAllPost;
            console.log(this.postId);
        })
          
       // this.vAllPost=this.formBuilder.formGroup(this.vAllPost) as IFormGroup<vAllPost>;
        this.postMessageFormGroup = this.formBuilder.formGroup(this.postMessage) as IFormGroup<PostMessage>;
        this.postMediaFormGroup = this.formBuilder.formGroup(this.postMedia) as IFormGroup<PostMedia>;
        this.createComment=this.formBuilder.group({
            comment:[],
            UserId:[],
            PostId:[]
        })
   
      // this.createPost=this.formBuilder.formGroup(PostMessage) as IFormGroup<PostMessage>;
       //this.createMedia=this.formBuilder.formGroup(PostMedia) as IFormGroup<PostMedia>;
    //    this.createPost=this.formBuilder.group({
    //        message:['asdasd'],
    //     media:[''],

    //    })

        // this.postMessageFormGroup = this.formBuilder.group({
        //     message:['asdasd'],
          
        // })
    }
    sendMessage(){
             this.post({path:"api/PostMessages",body:{Message:this.postMessageFormGroup.controls.message.value ,UserId:JSON.parse(sessionStorage.getItem('userData')).userID}}).subscribe(res =>{
                 this.result=res;
                  sessionStorage.setItem('userData',JSON.stringify(res));
            console.log(this.result);
            console.log(JSON.parse(sessionStorage.getItem('userData')).userID);

                 console.log(this.result);
             })
    }
    sendMedia(){
        this.post({path:"api/PostMedias",body:{Media:this.postMediaFormGroup.controls.media.value,UserId:JSON.parse(sessionStorage.getItem('userData')).userID}}).subscribe(res =>{
            this.result=res;
            console.log(this.result);               
        })
    }
    show(){
            this.get({params:[1], queryParams:{UserId:JSON.parse(sessionStorage.getItem('userData')).userID}}).subscribe(  res=>{
                this.result=res;})
                console.log(this.result);
           
            }
            likeButton(postId:any){
                this.post({path:"api/PostLikes",body:{UserId:JSON.parse(sessionStorage.getItem('userData')).userID,PostId:postId}}).subscribe(res =>{
                     this.result=res;
                     console.log(this.result);
                })
            }
            commentButton(postId:any){
                this.post({path:"api/PostComments",body:{Comment:this.createComment.controls.comment.value,UserId:JSON.parse(sessionStorage.getItem('userData')).userID,PostId:postId}}).subscribe(res =>{
                    this.result=res;
                    console.log(this.result);
            } ) }
            shareButton(postId:any){
                this.post({path:"api/PostShares",body:{UserId:JSON.parse(sessionStorage.getItem('userData')).userID,PostId:postId}}).subscribe(res =>{
                    this.result=res;
                    console.log(this.result);
                } ) }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
