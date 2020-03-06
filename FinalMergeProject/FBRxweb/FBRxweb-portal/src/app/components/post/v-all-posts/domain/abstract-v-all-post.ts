import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vAllPost } from '@app/models';


@http({
    hostKey:"server",
    path:"api/vAllPosts"
})
export class AbstractvAllPost extends RxHttp {
    vAllPostFormGroup: IFormGroup<vAllPost>
}
