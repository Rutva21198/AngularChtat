import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vCheckCommentUser } from '@app/models';

export class AbstractvCheckCommentUser extends RxHttp {
    vCheckCommentUserFormGroup: IFormGroup<vCheckCommentUser>
}
