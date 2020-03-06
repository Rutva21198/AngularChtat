import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { FacebookUserWork } from '@app/models';
import { anonymous } from '@rxweb/angular-router';


@anonymous()
@http({
    hostKey: "local",
    path: "api/FacebookUserWorks"
})
export class AbstractFacebookUserWork extends RxHttp {
    facebookUserWorkFormGroup: IFormGroup<FacebookUserWork>
}
