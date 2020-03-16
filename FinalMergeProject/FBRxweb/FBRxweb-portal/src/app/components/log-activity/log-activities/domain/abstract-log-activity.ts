import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { LogActivity } from '@app/models';
import { anonymous } from '@rxweb/angular-router';
@http({
    hostKey:'server',
    path:'api/vLogActivities'
})
@anonymous()
export class AbstractLogActivity extends RxHttp {
    logActivityFormGroup: IFormGroup<LogActivity>
}
