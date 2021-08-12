import { ProductState } from './product.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const PRODUCT_STATE="products";

const getProductState=createFeatureSelector<ProductState>(PRODUCT_STATE);

export const getProducts=createSelector(getProductState,(state)=>{
    return state.products;
});


export const getCartData=createSelector(getProductState,(state)=>{
    return state.carts;
});



export const fetchOrderData=createSelector(getProductState,(state)=>{
  return state.order;
});
