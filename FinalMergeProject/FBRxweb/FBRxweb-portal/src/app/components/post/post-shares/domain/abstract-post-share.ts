import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { PostShare } from '@app/models';

export class AbstractPostShare extends RxHttp {
    postShareFormGroup: IFormGroup<PostShare>
}
