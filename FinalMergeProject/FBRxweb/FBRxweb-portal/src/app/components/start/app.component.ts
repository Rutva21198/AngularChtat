import { Component, OnInit } from '@angular/core';
import { HttpClientConfig, HttpResponse } from '@rxweb/http';
import { BrowserStorage } from 'src/app/domain/services/browser-storage';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { RxHttp, http } from "@rxweb/http";
import { anonymous } from '@rxweb/angular-router';
import {FormBuilder,FormGroup} from '@angular/forms';
import { AuthFilter, HttpResponseCode } from 'src/app/temp-service/AuthFilter';

@anonymous()
@http({
    hostKey: "server",
    path: "api/SearchSearchName"
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent  extends RxHttp implements OnInit{
  
  isShowDashboard:boolean =false;
   subscription: Subscription;
   result:any;
   n:String;
   id:any;
   show:boolean;
   hide:boolean;
   display:boolean = true;
  searchForm:FormGroup
  constructor(private browserStorage: BrowserStorage, private router: Router,private formBuilder:FormBuilder) {
    super();
    
  }
  
  ngOnInit(): void {
    console.log("hello");
    
    console.log("hello");
    HttpClientConfig.register({
      hostURIs: [{
        name: 'server',
        default: false,
        uri: "https://localhost:44352"
      },
      {
        name: 'local',
        default: true,
        uri: "http://localhost:4200"// 'https://localhost:44376' 
      }],
      filters: [{ model: AuthFilter }],
      onError: (response: HttpResponse) => {
        if (response.statusCode == 401
        ) {
          this.browserStorage.local.clearAll();
          // this.baseToastr.error("Timeout")
          this.router.navigate(["/login"])
        }
        else if (response.statusCode == HttpResponseCode.InternalServerError) {
        //   this.baseToastr.error("Error occur")
        }
        else if (response.statusCode == 403) {
          this.router.navigate(["/unauthorized"]);
        }
      }
     })
    //  this.show=false;
    // this.hide=true;
    // this.display=true;

    let auth = localStorage.getItem("auth");
    console.log(auth);
    if (auth) {
     // this.router.navigate(["/v-all-posts"])
      this.isShowDashboard = true;
      this.display=false;
      this.id=localStorage.getItem("userId");
 
    }
    else {
      this.browserStorage.local.clearAll();
      this.isShowDashboard = false;
      this.display=true;
      this.router.navigate(["/login"])
      
    }

    ReactiveFormConfig.set({
      "validationMessage": {
        "required": "this field is required",
        "notEmpty": "You can't leave this empty",
        "minLength": "Minimum  characters required",
        "maxLength": "More than {{1}}  characters are not permitted",
        "pattern": "The specified input format is not recognized",
        "compare": "The specified values of {{0}} and {{1}} must be the same",
        "contains": "The specified value must ' in the input",
        "alpha": "You can use letters only",
        "alphaNumeric": "You can use letters, numbers and periods only",
        "range": "You need to enter appropriate value in this field",
        "maxNumber": "You can not enter value more than #n#",
        "numeric": "Only number required",
        "email": "Please enter valid email address",
        "latitude": "Please enter a valid latitude",
        "longitude": "Please enter a valid longitude",
        "url": "{{0}} Is not the correct url pattern.",
        "digit":"Only digit are allowed",
        "mask":"Enter only 10 digits",
        
        "password": "Password length should be of 8 to 20 characters and should have atleast one uppercase, one lowercase letter, a number and a special character, without any whitespaces"
      }, "reactiveForm": { "errorMessageBindingStrategy": 1 }
     });
     this.searchForm=this.formBuilder.group({
       n:['']
     })
    //  var auth = this.browserStorage.local.get('auth');
    
    // if (auth) {
    //   this.display=false;
    //   this.hide=false;
    //   this.show=true;
    // }
    // else{
    //   this.display=true;
    //   this.hide=true;
    //   this.show=false;
    
    // }
  }

  loginClicked(isClicked: boolean): void {
    if (isClicked) {
      this.isShowDashboard = true;
      this.router.navigate(["/users"])
      setTimeout(() => { this.isShowDashboard = true; }, 50)
    }
  }
  
  login()
  {
    this.router.navigate(["/login"]);
    // this.display=false;
    // this.hide=false;
    // this.show=true;
  }
  messenger()
  {
      this.router.navigate(["/UserList"])
  }
  home()
  {
    this.router.navigate(["/v-all-posts"])
  }
  profile(){
    this.router.navigate(["/vUserProfile"])
  }
  changePassword(){
    this.router.navigate(["/changePassword"])
    
  }
  logActivity()
  {
    this.router.navigate(["/logActivity"])
  }
  Search()
  {
       var t=this.searchForm.controls.n.value;
      
      var name=t.split(" ");
      var firstname=name[0];
      var lastname=name[1];
    
    this.subscription=this.post({path:'api/SearchSearchName',body:{firstName:firstname,lastName:''}})
    .subscribe((t:any)=>this.result=JSON.parse(t));
            console.log(this.result);
   
    // {   
    //     this.subscription = this.get({params:[i],queryParams:{UserId:this.id}}).subscribe((t: List<EducationDetail>) => {
    //         this.educationDetails = t;
    //     })
    // }


  }

//  password=false;
//  showcp()
//  {

// this.password=false;

//  }
  // changePassword()
  // {
  //        this.password=false;
  //       this.subscription=this.post({path:'api/SearchChangePassword',body:{oldpassword:this.searchForm.controls.oldpassword.value,
  //         newPassword:this.searchForm.controls.newPassword.value,UserId:[1]}}).subscribe(res=>{this.result=res});
  //         console.log(this.result);
  //        this.password=true;


  // }
  logout()
  {
    this.browserStorage.local.clearAll();
    localStorage.clear();
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      this.router.navigate(["/"]);
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    //this.router.navigate(["/login"]);
  }

}
