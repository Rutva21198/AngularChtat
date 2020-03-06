import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vUserProfile } from '@app/models';
import { anonymous } from '@rxweb/angular-router';



@anonymous()
@http({
    hostKey: "server",
    path: "api/vUserProfiles"
})

export class AbstractvUserProfile extends RxHttp {
    vUserProfileFormGroup: IFormGroup<vUserProfile>
}
