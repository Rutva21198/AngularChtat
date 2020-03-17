import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { ChatMessage } from '@app/models';
import { anonymous } from '@rxweb/angular-router';

@http({
    hostKey:'server',
    path:'api/SearchChatUserList'
})
@anonymous()
export class AbstractChatMeessage extends RxHttp {
    chatMeessageFormGroup: IFormGroup<ChatMessage>
}
