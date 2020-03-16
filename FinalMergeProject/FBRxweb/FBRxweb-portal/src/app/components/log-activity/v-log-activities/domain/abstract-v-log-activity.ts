import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vLogActivity } from '@app/models';
import { anonymous } from '@rxweb/angular-router';

@http({
    hostKey:'server',
    path:'api/LogActivities'
})
@anonymous()
export class AbstractvLogActivity extends RxHttp {
    vLogActivityFormGroup: IFormGroup<vLogActivity>
}
