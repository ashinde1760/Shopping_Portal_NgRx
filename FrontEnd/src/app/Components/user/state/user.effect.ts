import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { loginStart, loginSuccess, signUpStart, signUpSuccess } from './user.actions';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ServiceService } from "src/app/Service/service.service";
import { catchError, exhaustMap, map, tap } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { AppState } from 'src/app/store/app.state';
import { User } from 'src/app/model/user';

@Injectable()
export class UserEffect {
    constructor(private actions$: Actions, private service: ServiceService,
                private router: Router, private cookie: CookieService, 
                private store: Store<AppState>)
                {   }

    userData = {
        username: '',
        password: ''
    }

    userRegData = {
        name: '',
        email: '',
        mobile: '',
        username: '',
        password: ''
    }

    login$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                this.userData.username = action.username;
                this.userData.password = action.password;

                return this.service.loginUser(this.userData).pipe(map((data: any) => {

                    localStorage.setItem('uid', data.id);
                    this.cookie.set('token', data.name);

                    this.router.navigate(['/product/home']);
                    return loginSuccess({ data });
                }),
                catchError((errResp): any => {

                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Invalid Credentials',
                            showConfirmButton: false,
                            timer: 3000
                        })
                    }))
            })
        );
    });


    signup$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signUpStart),
            exhaustMap((action) => {
                this.userRegData.name = action.name;
                this.userRegData.email = action.email;
                this.userRegData.mobile = action.mobile;
                this.userRegData.username = action.username;
                this.userRegData.password = action.password;

                return this.service.regUser(this.userRegData).pipe(map((data: any) => {
                    this.router.navigate(['/user/login']);
                    return signUpSuccess({ data });
                }));
            })
        );
    });
}
