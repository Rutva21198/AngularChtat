import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { ChatMedia } from '@app/models';
import { anonymous } from '@rxweb/angular-router';

@http({
    hostKey:'server',
    path:'api/SearchOneToOneUserChat'
})
@anonymous()
export class AbstractChatMedia extends RxHttp {
    chatMediaFormGroup: IFormGroup<ChatMedia>
}
