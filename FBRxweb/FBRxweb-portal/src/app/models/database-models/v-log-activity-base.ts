import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vLogActivityBase {

//#region id Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'id', keyColumn: true})
        id : number;
//#endregion id Prop


//#region userId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'userId', keyColumn: false})
        userId : number;
//#endregion userId Prop


//#region postId Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'postId', keyColumn: false})
        postId : number;
//#endregion postId Prop


//#region name Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'name', keyColumn: false})
        name : string;
//#endregion name Prop


//#region post Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'post', keyColumn: false})
        post : string;
//#endregion post Prop


//#region activity Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'activity', keyColumn: false})
        activity : string;
//#endregion activity Prop

}