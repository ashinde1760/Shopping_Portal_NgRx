import { productState } from './product.state';
import { loadProductSuccess, getCartDetailsSuccess, getOrderDetailsSuccess } from './product.actions';
import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';


const _productReducer=createReducer(productState,
    on(loadProductSuccess,(state,action)=>{
        return{
            ...state,
            products:action.products,//it will store action data in "State";
        }
    }),
    on(getCartDetailsSuccess,(state,action)=>{
        return{
            ...state,
            carts:action.carts,//it will store action data in "State";
        }
    }),
    on(getOrderDetailsSuccess,(state,action)=>{
      return{
          ...state,
          order:action.orders,//it will store action data in "State";
      }
  }),
)

export function productReducer(state:any,action:any){
    return _productReducer(state,action);
}
