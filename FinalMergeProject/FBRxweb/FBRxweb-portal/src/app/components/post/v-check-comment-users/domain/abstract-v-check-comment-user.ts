import { RxHttp,http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vCheckCommentUser } from '@app/models';

import { anonymous } from '@rxweb/angular-router';
@anonymous()
@http({
    hostKey:"server",
    path:"api/vCheckCommentUsers"
})
export class AbstractvCheckCommentUser extends RxHttp {
    vCheckCommentUserFormGroup: IFormGroup<vCheckCommentUser>
}
