import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vOnlineUserList } from '@app/models';
import { anonymous } from '@rxweb/angular-router';


export class AbstractvOnlineUserList extends RxHttp {
    vOnlineUserListFormGroup: IFormGroup<vOnlineUserList>
}
