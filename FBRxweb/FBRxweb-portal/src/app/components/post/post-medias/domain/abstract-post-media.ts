import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { PostMedia } from '@app/models';

export class AbstractPostMedia extends RxHttp {
    postMediaFormGroup: IFormGroup<PostMedia>
}
