import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { PostLike } from '@app/models';

export class AbstractPostLike extends RxHttp {
    postLikeFormGroup: IFormGroup<PostLike>
}
