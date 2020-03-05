import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import {Router ,ActivatedRoute, Params} from '@angular/router';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import {ChatMessage} from '@app/models';
import { ChatMedia } from '@app/models';
import { AbstractChatMedia } from '../domain/abstract-chat-media';
import { List } from '@rxweb/generics';
import { FormGroup } from '@angular/forms';
import { getLocaleDateTimeFormat } from '@angular/common';


@Component({
    selector: "app-chat-media-add",
    templateUrl: './chat-media-add.component.html'
})
export class ChatMediaAddComponent extends AbstractChatMedia implements OnInit, OnDestroy {
    chatMedia: ChatMedia;
    chatMessage:ChatMessage;
    subscription: Subscription;
    result: any;
    chatMedias: List<ChatMedia>;
    chatMessageFormGroup:FormGroup;
    id= this.activatedRoute.snapshot.paramMap.get("id");;


    constructor(private formBuilder: RxFormBuilder,private router:Router,private activatedRoute: ActivatedRoute) {
        super();
        
    }

    ngOnInit(): void {
        this.chatMedia = new ChatMedia();
        this.chatMessage=new ChatMessage();
        this.chatMediaFormGroup = this.formBuilder.formGroup(this.chatMedia) as IFormGroup<ChatMedia>;
        
            console.log(this.id);
      
        this.subscription = this.post({body:{sender:2,receiver:this.id}}).subscribe((t: any) => {
            this.chatMedias = JSON.parse(t);
            console.log(t);
        })
        this.chatMessageFormGroup=this.formBuilder.formGroup(this.chatMessage) as IFormGroup<ChatMessage>;
    }

    sendMedia() {
        
        this.post({path:'api/ChatMedias', body:{Media:this.chatMediaFormGroup.controls.media.value,SenderId:2,ReceiverId:this.id}}).subscribe(t => {
            this.result = t;
            console.log(this.result)
         
        })
        this.subscription = this.post({body:{sender:2,receiver:this.id}}).subscribe((t: any) => {
            this.chatMedias = JSON.parse(t);
        })
        this.subscription = this.post({body:{sender:2,receiver:this.id}}).subscribe((t: any) => {
            this.chatMedias = JSON.parse(t);
        })
      this.chatMessageFormGroup=this.formBuilder.group( {media:['']})
    }
    sendMessage(){
        this.post({path:'api/ChatMessages', body:{Message:this.chatMessageFormGroup.controls.message.value,SenderId:this.id,ReceiverId:2}}).subscribe(t => {
            this.result = t;
            console.log(this.result)
        })
        this.subscription = this.post({body:{sender:2,receiver:this.id}}).subscribe((t: any) => {
            this.chatMedias = JSON.parse(t);
        })
      this.chatMessageFormGroup=this.formBuilder.group( {message:['']})
    }
 
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
