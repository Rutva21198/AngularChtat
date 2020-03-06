import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { EducationDetail } from '@app/models';
import { anonymous } from '@rxweb/angular-router';


@anonymous()
@http({
    hostKey: "server",
    path: "api/EducationDetails",
})

export class AbstractEducationDetail extends RxHttp {
    educationDetailFormGroup: IFormGroup<EducationDetail>
}
