import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { PostMessage } from '@app/models';

export class AbstractPostMessage extends RxHttp {
    postMessageFormGroup: IFormGroup<PostMessage>
}
