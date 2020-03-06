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
    
    constructor(private formBuilder: FormBuilder, private router:Router) {
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
                sessionStorage.setItem('userData',JSON.stringify(res));
            console.log(this.result);
            console.log(JSON.parse(sessionStorage.getItem('userData')).userID);
            
            if(this.result != 0){
                console.log("suces");
                 var fbid=this.result.UserId;
                 console.log(fbid);
                 this.router.navigate(['/v-all-posts']); 
                 this.display=true;              
            }
            // elseif(this.result=='suuccess with email'){

            // }
            // else{

            // }
  })
    }
    
}
