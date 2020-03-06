import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vCheckLikeUser } from '@app/models';

export class AbstractvCheckLikeUser extends RxHttp {
    vCheckLikeUserFormGroup: IFormGroup<vCheckLikeUser>
}
