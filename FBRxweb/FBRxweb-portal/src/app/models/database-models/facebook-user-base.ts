import { prop,propObject,propArray,required,maxLength,range ,mask,email,password } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class FacebookUserBase {

//#region userID Prop
        @prop()
        userID : number;
//#endregion userID Prop


//#region firstName Prop
        @required()
        @maxLength({value:50})
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @required()
        @maxLength({value:50})
        lastName : string;
//#endregion lastName Prop


//#region mobileNo Prop
        @required()
        @maxLength({value:50})
        @mask({mask:'9999999999' })
        mobileNo : string;
//#endregion mobileNo Prop


//#region email Prop
        @required()
        @maxLength({value:50})
        @email()
        email : string;
//#endregion email Prop


//#region password Prop
        @required()
        @maxLength({value:132})
        @password({validation:{maxLength: 20,minLength: 8,digit: true,specialCharacter: true} })
        password : any;
//#endregion password Prop


//#region dateOfBirth Prop
        @required()
        dateOfBirth : Date;
//#endregion dateOfBirth Prop


//#region genderAO Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        genderAO : number;
//#endregion genderAO Prop


//#region createdDateTime Prop
        @required()
        createdDateTime : any;
//#endregion createdDateTime Prop


//#region loginStatus Prop
        @required()
        loginStatus : boolean;
//#endregion loginStatus Prop


//#region salt Prop
        @maxLength({value:140})
        salt : any;
//#endregion salt Prop





































}