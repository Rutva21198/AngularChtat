import { Component, OnInit } from '@angular/core';
import { HttpClientConfig, HttpResponse } from '@rxweb/http';
import { BrowserStorage } from 'src/app/domain/services/browser-storage';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { RxHttp, http } from "@rxweb/http";
import { anonymous } from '@rxweb/angular-router';
import {FormBuilder,FormGroup} from '@angular/forms';



@anonymous()
@http({
    hostKey: "server",
    path: "api/SearchSearchName"
})
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  extends RxHttp implements OnInit {

  subscription: Subscription;
  result:any;
  n:String;
 searchForm:FormGroup
 constructor(private browserStorage: BrowserStorage, private router: Router,private formBuilder:FormBuilder) {
   super();
 }

  ngOnInit(): void {
    this.searchForm=this.formBuilder.group({
      n:['']
    })
  }
  work()
  {
   // this.password=true;

this.router.navigate(["/work"]);

  }
  education()
  {
   // this.password=true;
    this.router.navigate(["/education-details/add"]);
  }
  show=false;
  hide=false;
  Search()
  {
       var t=this.searchForm.controls.n.value;
      this.hide=true;
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

    this.router.navigate(["/login"]);
  }

}
