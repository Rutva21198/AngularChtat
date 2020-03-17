import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vCheckLikeUser } from '@app/models';


@http({
    hostKey:"server",
    path:"api/vCheckLikeUsers"
})
export class AbstractvCheckLikeUser extends RxHttp {
    vCheckLikeUserFormGroup: IFormGroup<vCheckLikeUser>
}
