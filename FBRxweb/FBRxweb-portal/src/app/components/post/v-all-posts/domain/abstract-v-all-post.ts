import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vAllPost } from '@app/models';
import { anonymous } from '@rxweb/angular-router';

@http({
   hostKey:'server',
   path:'api/vallposts',
})
export class AbstractvAllPost extends RxHttp {
    vAllPostFormGroup: IFormGroup<vAllPost>
}
