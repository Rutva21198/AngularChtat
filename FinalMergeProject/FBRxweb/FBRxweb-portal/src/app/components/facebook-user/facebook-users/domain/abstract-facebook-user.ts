import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { FacebookUser } from '@app/models';
import {  http } from "@rxweb/http";


@http({
    hostKey: "server",
    path: "api/FacebookUsers",
})
export class AbstractFacebookUser extends RxHttp {
    facebookUserFormGroup: IFormGroup<FacebookUser>
}
