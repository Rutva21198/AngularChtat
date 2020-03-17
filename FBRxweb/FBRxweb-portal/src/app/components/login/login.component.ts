import { Component, OnInit } from '@angular/core';
import { anonymous, middleware } from '@rxweb/angular-router'
import { multilingual } from '@rxweb/localization'
import { CoreComponent } from '@rxweb/angular-router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { FacebookUser } from '@app/models';
import { Subscription } from 'rxjs';
import { password } from '@rxweb/reactive-form-validators';
import { http } from '@rxweb/http';
import {ActivatedRoute,Router} from '@angular/router';
import { BrowserStorage } from 'src/app/domain/services/browser-storage';

//import { LoggedInMiddleware } from '../../domain/security/middleware/logged-in.middleware';

//@middleware([LoggedInMiddleware])
@multilingual("loginComponent")
// @anonymous()

@http({
    hostKey: "server",
    path: "api/FacebookUsers",
})
@Component({
    templateUrl: './login.component.html',
})

export class LoginComponent extends CoreComponent implements OnInit {
    result: any;
    facebookLoginFormGroup:FormGroup;
    facebookUser:FacebookUser;
    subscription: Subscription;
    
    constructor(private browserStorage: BrowserStorage,private formBuilder: FormBuilder, private router:Router) {
        super();
    }
    ngOnInit(): void {
        this.facebookUser = new FacebookUser();
      
        this.facebookLoginFormGroup=this.formBuilder.group({
            MobileNoEmail:['',Validators.required],
            password:['',Validators.required]         
        })
     //   params:[1],
    }
    display=false;
    login(){
        
        this.get({ params:[1], queryParams:{Email:this.facebookLoginFormGroup.controls.MobileNoEmail.value,
            Password:this.facebookLoginFormGroup.controls.password.value}}).subscribe(res => {
                this.result = res;
               // this.browserStorage.local.save('auth', res);
           // console.log(this.result.userID);
         //   console.log(JSON.parse(sessionStorage.getItem('userData')).userID);
            
            if(this.result != 0){
                localStorage.setItem('auth', this.result.token);
                localStorage.setItem('userId', this.result.userID);
                this.browserStorage.session.save('userData',this.result);
                console.log("suces");
                console.log(JSON.parse(sessionStorage.getItem('userData')).userID);
                console.log( localStorage.getItem('auth'));
                console.log( localStorage.getItem('userId'));
                console.log("sucesadfgajs");
                // this.put({path:'api/FacebookUsers',params:[localStorage.getItem('userId')],body:{LoginStatus:1}}).subscribe(r=>{this.result=r
                //     console.log(this.result);
                // });

                this.router.navigate(['/v-all-posts']); 
               
            }
            else{
                alert("Password or MobileNo/Email not Currect...")
            }
            // elseif(this.result=='suuccess with email'){

            // }
            // else{

            // }
  })
    }
    
}
