import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class LogActivityBase {

//#region logActivityId Prop
        @prop()
        logActivityId : number;
//#endregion logActivityId Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop


//#region postId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        postId : number;
//#endregion postId Prop


//#region activity Prop
        @required()
        @maxLength({value:50})
        activity : string;
//#endregion activity Prop



}