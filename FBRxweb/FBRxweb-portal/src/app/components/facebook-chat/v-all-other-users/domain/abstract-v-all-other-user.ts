import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vAllOtherUser } from '@app/models';
import { anonymous } from '@rxweb/angular-router';

@http({
    hostKey:'server',
    path:'api/vAllOtherUsers'
})
@anonymous()
export class AbstractvAllOtherUser extends RxHttp {
    vAllOtherUserFormGroup: IFormGroup<vAllOtherUser>
}
