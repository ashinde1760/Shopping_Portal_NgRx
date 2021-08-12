import { loginSuccess, signUpSuccess } from './user.actions';
import { initialState } from './user.state';
import { createReducer, on } from "@ngrx/store";


const _userReducer = createReducer(initialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.data,
        };
    }),
    on(signUpSuccess, (state, action) => {
        return {
            ...state,
            userReg: action.data,
        }
    }));

export function userReducer(state: any, action: any) {
    return _userReducer(state, action);
}