import { ProductState } from '../Components/product/store/product.state';
import { productReducer } from "../Components/product/store/product.reducer";
import { userReducer } from "../Components/user/state/user.reducer";
import { UserState } from "../Components/user/state/user.state";


export interface AppState{
    userState:UserState;
    productState:ProductState;
}


export const appReducer={
    user:userReducer,
    products:productReducer,
}