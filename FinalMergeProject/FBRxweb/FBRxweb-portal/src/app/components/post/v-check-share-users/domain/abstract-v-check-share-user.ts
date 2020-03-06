import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vCheckShareUser } from '@app/models';

export class AbstractvCheckShareUser extends RxHttp {
    vCheckShareUserFormGroup: IFormGroup<vCheckShareUser>
}
