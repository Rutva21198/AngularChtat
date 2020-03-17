import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { FacebookUserDetail } from '@app/models';
import { anonymous } from '@rxweb/angular-router';

@anonymous()
@http({
    hostKey: "server",
    path: "api/FacebookUserDetails"
})
export class AbstractFacebookUserDetail extends RxHttp {
    facebookUserDetailFormGroup: IFormGroup<FacebookUserDetail>
}
