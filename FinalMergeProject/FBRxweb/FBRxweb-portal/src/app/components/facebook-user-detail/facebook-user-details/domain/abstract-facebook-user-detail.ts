import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { FacebookUserDetail } from '@app/models';

export class AbstractFacebookUserDetail extends RxHttp {
    facebookUserDetailFormGroup: IFormGroup<FacebookUserDetail>
}
