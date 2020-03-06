import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { PostComment } from '@app/models';

export class AbstractPostComment extends RxHttp {
    postCommentFormGroup: IFormGroup<PostComment>
}
