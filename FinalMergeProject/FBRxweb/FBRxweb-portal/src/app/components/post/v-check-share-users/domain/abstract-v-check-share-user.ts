import { RxHttp,http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vCheckShareUser } from '@app/models';



import { anonymous } from '@rxweb/angular-router';
@anonymous()
@http({
    hostKey:"server",
    path:"api/vCheckShareUsers"
})
export class AbstractvCheckShareUser extends RxHttp {
    vCheckShareUserFormGroup: IFormGroup<vCheckShareUser>
}
