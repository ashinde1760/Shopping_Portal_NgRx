import { CartData } from 'src/app/model/carts';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';
import { MyOrderData } from 'src/app/model/MyOrderData';
import { SingleProduct } from 'src/app/model/SingleProduct';
import { GetProdData } from 'src/app/model/getProductData';

export const LOAD_PRODUCTS='[product page] load products';
export const LOAD_PRODUCT_SUCCESS='[product page] load prducts success';
export const ADD_PRODUCT='[product page] add Product';
export const GET_PRODUCT_DATA='[product page] get product details';
export const ADD_CART='[product page] add to cart';
export const GET_CART_DATA='[product page] get cart data';
export const GET_CART_DATA_SUCCESS='[product page] get cart data success';
export const DELETE_FROM_CART='[cart page] delete from cart';
export const GET_ORDER_DATA = '[order page] data from order';
export const GET_ORDER_DETAILS_SUCCESS = '[order page] get order details success';
export const DO_NOTHING = ' Nothing to do';



//call will goes to effect
export const loadAllProducts=createAction(LOAD_PRODUCTS);
//call will goes to reducer
export const loadProductSuccess=createAction(LOAD_PRODUCT_SUCCESS,props<{products:GetProdData}>());

//call will goes to effect
export const addProduct=createAction(ADD_PRODUCT,props<SingleProduct>())

//call will goes to effect
export const getProductData=createAction(GET_PRODUCT_DATA,props<{id:number}>());
//call will goes to effect
export const addCart=createAction(ADD_CART,props<{carts:GetProdData}>());


//call will goes to effect
export const getCartDetails=createAction(GET_CART_DATA,props<{uid:string}>());
//call will goes to reducer
export const getCartDetailsSuccess=createAction(GET_CART_DATA_SUCCESS,props<{carts:CartData[]}>());

//call will goes to effect
export const deleteFromCart=createAction(DELETE_FROM_CART,props<{id:number}>());

//call will goes to effect
export const getOrderData = createAction(GET_ORDER_DATA,props<{uid:string}>());
//call will goes to reducer
export const getOrderDetailsSuccess = createAction(GET_ORDER_DETAILS_SUCCESS,props<{orders:MyOrderData[]}>())

export const doNothing=createAction(DO_NOTHING);