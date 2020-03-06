import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { ChatMessage } from '@app/models';
import { AbstractChatMeessage } from '../domain/abstract-chat-meessage';

@Component({
    selector: "app-chat-meessage-add",
    templateUrl: './chat-meessage-add.component.html'
})
export class ChatMeessageAddComponent extends AbstractChatMeessage implements OnInit, OnDestroy {
    chatMeessage: ChatMessage;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder,private router:Router) {
        super();
    }

    ngOnInit(): void {
        this.chatMeessage = new ChatMessage();
        this.chatMeessageFormGroup = this.formBuilder.formGroup(this.chatMeessage) as IFormGroup<ChatMessage>;

        this.subscription = this.post({body:{id:JSON.parse(sessionStorage.getItem('userData')).userID}}).subscribe((t: any) => {
            this.chatMeessage = JSON.parse(t);
            console.log(this.chatMeessage);
        })
    }
    // Userchat(id:any){
    //     console.log(id);
    //     this.router.navigateByUrl("['/Chat/',id]");
        
    // }
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
