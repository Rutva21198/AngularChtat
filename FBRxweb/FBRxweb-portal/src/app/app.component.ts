import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FBRxweb-portal';
  fbFormGroup:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router){}


 ngOnInit(){
    this.fbFormGroup=this.formBuilder.group(
      {
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        password:['',Validators.required],
        mobileNo:['',Validators.required],
        email :['',Validators.required],
        gender:['',Validators.required],
        dob:['',Validators.required]
      }

    );
  }
  submit()
  {
    console.log(this.fbFormGroup);
  }
  login()
  {
    console.log("hello")
    this.router.navigate(["/education-details"]);
  }
}
