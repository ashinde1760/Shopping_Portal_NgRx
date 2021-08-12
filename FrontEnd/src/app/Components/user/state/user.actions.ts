import { SignUp } from './../../../model/signup';
import { createAction, props } from "@ngrx/store";
import { User } from 'src/app/model/user';
import { Login } from 'src/app/model/login';

export const LOGIN_START= "[user-page] login start";
export const LOGIN_SUCCESS="[user-page] login success";
export const SIGNUP_START="[user-page] signup start"
export const SIGNUP_SUCCESS="[user-page] signup success"


export const loginStart=createAction(LOGIN_START,props<Login>());
export const loginSuccess=createAction(LOGIN_SUCCESS,props<{data:User}>());

export const signUpStart=createAction(SIGNUP_START,props<SignUp>())
export const signUpSuccess=createAction(SIGNUP_SUCCESS,props<{data:User}>());