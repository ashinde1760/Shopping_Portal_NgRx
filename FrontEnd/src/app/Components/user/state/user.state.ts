import { User } from 'src/app/model/user';

export interface UserState{
    user:User | null,
    userReg:User | null,

}

export const initialState:UserState={
    user:null,
    userReg:null,
}