import { AppState } from '../../../store/app.state';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Store } from '@ngrx/store';
import { signUpStart } from '../state/user.actions';
import { SignUp } from 'src/app/model/signup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpData!:SignUp;
  registerFormGroup!: FormGroup;
  fieldTextType!: boolean;


  constructor(public router: Router, private formBuilder: FormBuilder, 
              private service: ServiceService, private store:Store<AppState>) 
              {
                  this.initRegForm();
              }

  ngOnInit(): void {
    
  }

  initRegForm() {
    this.registerFormGroup = this.formBuilder.group(
      { 
        name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ]{2,30}")]),
        email: new FormControl('', [Validators.required, Validators.email]),
        mobile: new FormControl('', [Validators.required, Validators.pattern("^[789][0-9]{9}$")]),
        username: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z_0-9]{3,15}")]),
        password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$")])
      }
    );
  }

  userRegister() {
    this.signUpData=this.registerFormGroup.value;
    this.store.dispatch(signUpStart(this.signUpData));
 }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
