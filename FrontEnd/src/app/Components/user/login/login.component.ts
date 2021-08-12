import { AppState } from '../../../store/app.state';
import { loginStart } from './../state/user.actions';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { ServiceService } from 'src/app/Service/service.service';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private formBuilder: FormBuilder,
    private service: ServiceService, private cookie: CookieService,
    private store: Store<AppState>) {
    this.initLoginForm();
  }

  loginData!: Login;
  loginFormGroup!: FormGroup;
  fieldTextType!: boolean;

  ngOnInit() {
    localStorage.clear();
    this.cookie.deleteAll();
  }


  initLoginForm() {
    this.loginFormGroup = this.formBuilder.group(
      {
        username: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z_0-9]{3,15}")]),
        password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$")])
      }
    );
  }



  userLogin() {
    this.loginData = this.loginFormGroup.value;
    this.store.dispatch(loginStart(this.loginData));
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
